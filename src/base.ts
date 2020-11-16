/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch from 'isomorphic-unfetch'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { stringify } from 'envfile'
import fs from 'fs'

type Config = {
    baseURL: string
    username: string
    password: string
    jwtToken: string
    token?: string
    envPath?: string
}

export abstract class Base {
    private baseURL: string
    private username: string
    private password: string
    private jwtToken: string
    private token: string
    private envPath: string

    constructor(config: Config) {
        this.baseURL = config.baseURL || process.env.MLOYALTY_BASE_URL
        this.username = config.username || process.env.MLOYALTY_USERNAME
        this.password = config.password || process.env.MLOYALTY_PASSWORD
        this.jwtToken = config.jwtToken || process.env.MLOYALTY_JWT_TOKEN
        this.token = config.token || process.env.MLOYALTY_TOKEN
        this.envPath = config.envPath
    }

    private async getToken() {
        const res = await fetch(this.baseURL + 'managerlogin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            },
            body: `username=${this.username}&password=${this.password}&grant_type=password`,
        })
        if (res.ok) {
            return await res.json()
        }
        throw new Error(`${res.status} ${res.statusText}`)
    }

    protected async request<T>(
        endpoint: string,
        options?: RequestInit
    ): Promise<T> {
        const clockTimestamp: number = Math.floor(Date.now() / 1000)
        const decoded: any = jwt.decode(this.jwtToken)

        if (clockTimestamp >= decoded.exp - 5 * 60) {
            const data = await this.getToken()

            this.jwtToken = data.access_token
            process.env.MLOYALTY_JWT_TOKEN = this.jwtToken

            const decoded: any = jwt.decode(this.jwtToken)
            this.token = decoded.token
            process.env.MLOYALTY_TOKEN = decoded.token

            if (this.envPath) {
                const envConfig = dotenv.parse(fs.readFileSync(this.envPath))
                envConfig.MLOYALTY_JWT_TOKEN = this.jwtToken
                envConfig.MLOYALTY_TOKEN = this.token
                fs.writeFileSync(this.envPath, stringify(envConfig))
            }
        }

        const url = this.baseURL + endpoint
        const headers = {
            Authorization: `Bearer ${this.jwtToken}`,
            'Content-type': 'application/json',
        }

        const body = JSON.parse(options.body.toString())
        body.token = this.token
        options.body = JSON.stringify(body)

        const config = {
            ...options,
            headers,
        }

        return fetch(url, config).then((res) => {
            if (res.ok) {
                return res.json()
            }
            throw new Error(`${res.status} ${res.statusText}`)
        })
    }
}
