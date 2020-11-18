/* eslint-disable @typescript-eslint/no-var-requires */
const nock = require('nock')
const MloyaltyApi = require('../../dist/mloyalty-api')
const dotenv = require('dotenv')

const envPath = '.env'
dotenv.config({ path: envPath })

describe('Campaign resource', () => {
    test('getCampaign returns Campaign by id', async () => {
        const scope = nock('http://dev.lctest.ru/')
            .post('/api/site/GetCampaign', {
                CampaignID: 1,
                token: process.env.MLOYALTY_TOKEN,
            })
            .reply(200, { ErrorCode: 0 })

        const ml = new MloyaltyApi({
            envPath: envPath,
        })
        await ml.getCampaign({ CampaignID: 1 })

        scope.done()
    })
})

describe('Campaigns resource', () => {
    test('getCampaigns returns a list of campaigns', async () => {
        const scope = nock('http://dev.lctest.ru/')
            .post('/api/site/GetCampaigns', {
                Operator: 1,
                token: process.env.MLOYALTY_TOKEN,
            })
            .reply(200, { ErrorCode: 0 })

        const ml = new MloyaltyApi({
            envPath: envPath,
        })
        await ml.getCampaigns({ Operator: 1 })

        scope.done()
    })
})
