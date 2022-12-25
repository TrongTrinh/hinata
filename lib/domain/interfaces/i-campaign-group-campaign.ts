import { CampaignGroupCampaign } from '@prisma/client';
import { ICampaign } from './i-campaign';

export interface ICampaignGroupCampaign extends CampaignGroupCampaign {
  Campaign: ICampaign;
}
