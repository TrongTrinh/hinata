import { ProductSponsor, Sponsor } from '@prisma/client';

export interface IProductSponsor extends ProductSponsor {
  Sponsors: Sponsor;
}
