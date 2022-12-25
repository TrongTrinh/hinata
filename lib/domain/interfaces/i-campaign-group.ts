import { CampaignGroup } from '@prisma/client';
import { ICampaignGroupCampaign } from './i-campaign-group-campaign';

export interface ICampaignGroup extends CampaignGroup {
  campaigns: ICampaignGroupCampaign[];
}
