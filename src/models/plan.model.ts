import { Schema, model } from 'mongoose';
import { IPlan } from '../interface';

const schema = new Schema<IPlan>({
  name: {
    type: String,
    required: [true, 'plan name is required'],
  },
  min: {
    type: Number,
    required: [true, 'plan minimum value is required'],
  },
  max: {
    type: Number,
    required: [true, 'plan maximum value is required'],
  },
  duration: {
    type: Date,
    default: Date.now,
  },
});

// App Propterties
schema.set('toJSON', { virtuals: true });
schema.set('toObject', { virtuals: true });
schema.set('timestamps', { createdAt: true, updatedAt: true });
schema.set('id', false);

export const PlanModel = model<IPlan>('Plan', schema);
