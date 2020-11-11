/* eslint-disable @typescript-eslint/no-empty-interface */
import { Base } from './base'
import { Campaign } from './campaigns'
import { applyMixins } from './utils'

class MloyaltyApi extends Base {}
interface MloyaltyApi extends Campaign {}
applyMixins(MloyaltyApi, [Campaign])

export default MloyaltyApi
