/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
    CampaignDetail,
    Campaigns,
    CampaignFilter,
    CampaignParams,
} from './types'
import { Base } from '../base'

const resourceName = 'api/site'

export class Campaign extends Base {
    getCampaign(params: CampaignParams) {
        return this.request<CampaignDetail>(`${resourceName}/GetCampaign`, {
            method: 'POST',
            body: JSON.stringify(params),
        })
    }

    getCampaigns(params: CampaignFilter) {
        return this.request<Campaigns>(`${resourceName}/GetCampaigns`, {
            method: 'POST',
            body: JSON.stringify(params),
        })
    }
}
