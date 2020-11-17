/* eslint-disable @typescript-eslint/no-empty-interface */
import { Base } from './base'
import { Campaign } from './campaigns'
import { POS } from './pos'
import { applyMixins } from './utils'

class MloyaltyApi extends Base {}
interface MloyaltyApi extends Campaign, POS {}
applyMixins(MloyaltyApi, [Campaign, POS])

export default MloyaltyApi
