export type PartnerData = {
    id: number
    name: string
    logo: string
    description: string
    condition: string
    tagline: string
    internetshop: string
    isCardIssue: boolean
    isInCity: boolean
    isInInternet: boolean
    categoryId: number[]
    isFav: boolean
    share_url: string
    biglogo: string
    showOnSite: boolean
}

export type PartnerDetail = {
    ErrorCode: number
    Message: string
    PartnerData: PartnerData
}

export type PartnerParams = {
    PartnerID: number
}

export type Partners = {
    ErrorCode: number
    Message: string
    PartnerData: PartnerData[]
}

export type PartnerFilter = {
    Operator: number
    ClientID?: number
    IsMainPage?: boolean
    CityID?: number
    SegmentID?: number
    CategoryID?: number
    IsCardIssue?: boolean
    IsInCity?: boolean
    IsInInternet?: boolean
}
