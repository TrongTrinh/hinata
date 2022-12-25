import { Country, Gallery, Prisma } from '@prisma/client';
import { ICollection } from './i-collection';
import { IFollowed } from './i-followed';
import { IFollower } from './i-follower';
import { IUserCategory } from './i-user-category';

export type User = {
    id: string;
    email: string | null;
    sub?: string | null;
    emailVerified?: Date | null;
    firstName: string | null;
    lastName: string | null;
    nickname: string | null;
    password?: string | null;
    phone: string | null;
    image?: string | null;
    s3Key?: string | null;
    biography: string | null;
    gender?: any;
    birthdate?: Date | null;
    hazamaAddress?: string | null;
    hazamaWallet?: string | null;
    hazamaOriginalDomain?: string | null;
    salt?: string | null;
    iv?: string | null;
    encryptedWif?: string | null;
    stripeCustomerId: string | null;
    role: any;
    avatar: string | null;
    slug: string | null;
    wpSlug: string | null;
    deleted?: boolean;
    operator: boolean;
    countryId: string | null;
    created: Date;
    updated: Date;
    sns?: Prisma.JsonValue;
};

export type IUser = User & {
    categories?: IUserCategory[];
    followers?: IFollower[] | any;
    followeds?: IFollowed[] | any;
    Country?: Country | null;
    galleries?: Gallery[];
    collections?: ICollection[] | null;
};
