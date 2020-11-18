export type PosData = {
    Id: number
    PosCode: string
    Region: string
    City: string
    Address: string
    Phone: string
    Mapposition: string
    ShowOnSite: boolean
    GivesCard: boolean
    PartnerName: string
    PosName: string
    Landmark: string
    Clientdistance: number
    Description: string
    Workdescription: string
    Clostime: string
    Imagemain: string
    Imagepreview: string
    Imagearray: string
    Opentime: string
}

export type Poses = {
    ErrorCode: number
    Message: string
    PosData: PosData[]
}

export type PosFilter = {
    Operator: number
    PartnerID?: number
    CampaignID?: number
    PosName?: string
    Client?: number
    Clientmapposition?: string
    Radius?: number
}
