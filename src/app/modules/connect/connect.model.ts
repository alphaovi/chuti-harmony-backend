import { model, Schema } from 'mongoose';
import { TConnect } from './connect.interface';

const connectSchema = new Schema<TConnect>({
  title1: { type: String, required: true },
  description1: { type: String, required: true },
  title2: { type: String, required: true },
  description2: { type: String, required: true },
  hotline: {type: String, required: true},
  sales: {type: String, required: true},
  email: {type: String, required: true},
  address: {type: String, required: true},
  image: { type: String, required: true },
});

export const ConnectModel = model<TConnect>("connect", connectSchema)
