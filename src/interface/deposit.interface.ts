import { Types } from 'mongoose';

export interface IDepositHistory {
  _id?: Types.ObjectId;
  depositMethod: Types.ObjectId;
  user: Types.ObjectId;
  image?: string;
}

export interface IDepositMethod {
  _id?: Types.ObjectId;
  name: string;
  shortName: string;
  walletAddress: string;
}
