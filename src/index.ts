/* eslint-disable @typescript-eslint/no-empty-interface */
import { Base } from './base'
import { Campaign } from './campaigns'
import { POS } from './pos'
import { Partner } from './partner'
import { applyMixins } from './utils'

class MloyaltyApi extends Base {}
interface MloyaltyApi extends Campaign, POS, Partner {}
applyMixins(MloyaltyApi, [Campaign, POS, Partner])

export default MloyaltyApi
