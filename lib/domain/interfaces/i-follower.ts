import { Relationship } from '@prisma/client';
import { IUser } from './i-user';

export interface IFollower extends Relationship {
  User: IUser;
}
