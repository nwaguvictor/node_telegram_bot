import { Types } from 'mongoose';

export interface IPlan {
  _id?: Types.ObjectId;
  name: string;
  min: number;
  max: number;
  duration: Date;
}
