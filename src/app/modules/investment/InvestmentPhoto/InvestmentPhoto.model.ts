import { model, Schema } from 'mongoose';
import { TInvestmentPhoto } from './InvestmentPhoto.interface';

const InvestmentPhotoSchema = new Schema<TInvestmentPhoto>(
  {
    investmentImageName: { type: String, required: true },
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
