import { Types } from 'mongoose';

export interface IUser {
  _id?: Types.ObjectId;
  firstname: string;
  lastname: string;
  balance: number;
  phone: string;
  email: string;
  password: string;
}
