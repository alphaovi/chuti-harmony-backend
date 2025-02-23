import { model, Schema } from 'mongoose';
import { TInvestmentPhoto } from './investmentPhoto.interface';


const InvestmentPhotoSchema = new Schema<TInvestmentPhoto>(
  {
    name: { type: String, required: true },
    investmentImage: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const InvestmentPhotoModel = model<TInvestmentPhoto>(
  'investmentPhoto',
  InvestmentPhotoSchema,
);
