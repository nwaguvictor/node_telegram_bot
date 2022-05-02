import { Schema, model } from 'mongoose';
import { IInvestment } from '../interface';

const schema = new Schema<IInvestment>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'investment user id is required'],
  },
  plan: {
    type: Schema.Types.ObjectId,
    ref: 'Plan',
    required: [true, 'investment plan id is required'],
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    required: [true, 'investment endDate is required'],
  },
});

// App Propterties
schema.set('toJSON', { virtuals: true });
schema.set('toObject', { virtuals: true });
schema.set('timestamps', { createdAt: true, updatedAt: true });
schema.set('id', false);

export const InvestmentModel = model<IInvestment>('Invesment', schema);
