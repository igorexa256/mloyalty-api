/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Base } from '../base'
import { Poses, PosFilter } from './types'

const resourceName = 'api/site'

export class POS extends Base {
    getPoses(params: PosFilter) {
        return this.request<Poses>(`${resourceName}/GetPoses`, {
            method: 'POST',
            body: JSON.stringify(params),
        })
    }
}
