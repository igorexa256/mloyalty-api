type CampaignData = {
    id: number
    name: string
    logo: string
    large: boolean
    partnerlogo: string
    description: string
    condition: string
    tagline: string
    isPopular: boolean
    isNew: boolean
    categoryId: number[]
    partnerId: number
    internetShop: string
    isFav: boolean
    share_url: string
    startDate: Date
    endDate: Date
    active: boolean
    noposes: boolean
}

export type CampaignDetail = {
    ErrorCode: number
    Message: string
    CampaignData: CampaignData
}

export type CampaignParams = {
    CampaignID: number
}

export type Campaigns = {
    ErrorCode: number
    Message: string
    CampaignData: CampaignData[]
}

export type CampaignFilter = {
    Operator: number
    PartnerID?: number
    IsMainpage?: boolean
    IsSidebar?: boolean
    IsRecommended?: boolean
    IsNew?: boolean
    ClientID?: number
    CityID?: number
    SegmentID?: number
    CategoryID?: number
    FavClientCampaign?: number
    Pos?: number
}
