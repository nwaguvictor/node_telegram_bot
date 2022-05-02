import { Types } from 'mongoose';

export interface IInvestment {
  _id?: Types.ObjectId;
  user?: Types.ObjectId;
  plan?: Types.ObjectId;
  startDate: Date;
  endDate: Date;
}
