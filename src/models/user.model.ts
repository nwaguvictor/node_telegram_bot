import { Schema, model } from 'mongoose';
import { IUser } from '../interface';

const schema = new Schema<IUser>({
  firstname: {
    type: String,
    required: [true, 'user firstname is required'],
  },
  lastname: {
    type: String,
    required: [true, 'user lastname is required'],
  },
  email: {
    type: String,
    required: [true, 'user email is required'],
    unique: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  phone: {
    type: String,
    required: [true, 'user phone number is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'user password is required'],
  },
});

// App Propterties
schema.set('toJSON', { virtuals: true });
schema.set('toObject', { virtuals: true });
schema.set('timestamps', { createdAt: true, updatedAt: true });
schema.set('id', false);

export const UserModel = model<IUser>('User', schema);
