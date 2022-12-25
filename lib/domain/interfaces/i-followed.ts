import { Relationship } from '@prisma/client';
import { IUser } from './i-user';

export interface IFollowed extends Relationship {
  User: IUser;
}
