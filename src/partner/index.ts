/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Base } from '../base'
import { PartnerDetail, PartnerFilter, PartnerParams, Partners } from './types'

const resourceName = 'api/site'

export class Partner extends Base {
    getPartner(params: PartnerParams) {
        return this.request<PartnerDetail>(`${resourceName}/GetPartner`, {
            method: 'POST',
            body: JSON.stringify(params),
        })
    }

    getPartners(params: PartnerFilter) {
        return this.request<Partners>(`${resourceName}/GetPartners`, {
            method: 'POST',
            body: JSON.stringify(params),
        })
    }
}
