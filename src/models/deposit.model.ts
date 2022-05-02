import { Schema, model } from 'mongoose';
import { IDepositHistory, IDepositMethod } from '../interface';

// Method
const methodSchema = new Schema<IDepositMethod>({
  name: {
    type: String,
    required: [true, 'deposit method name is requierd'],
  },
  shortName: {
    type: String,
    required: [true, 'deposit method short name is required'],
  },
  walletAddress: {
    type: String,
    required: [true, 'deposit method wallet address is required'],
  },
});

// App Propterties
methodSchema.set('toJSON', { virtuals: true });
methodSchema.set('toObject', { virtuals: true });
methodSchema.set('timestamps', { createdAt: true, updatedAt: true });
methodSchema.set('id', false);

export const DepositMethod = model<IDepositMethod>('DepositMethod', methodSchema);

// History
const historySchema = new Schema<IDepositHistory>({
  depositMethod: {
    type: Schema.Types.ObjectId,
    ref: 'DepositMethod',
    required: [true, 'deposit history method id is required'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'deposit history user id is required'],
  },
  image: String,
});

// App Propterties
historySchema.set('toJSON', { virtuals: true });
historySchema.set('toObject', { virtuals: true });
historySchema.set('timestamps', { createdAt: true, updatedAt: true });
historySchema.set('id', false);

export const DepositHistory = model<IDepositHistory>('DepositHistory', historySchema);
