import { model, Schema } from 'mongoose';
import { TInvestmentData } from './investmentData.interface';

const InvestmentDataSchema = new Schema<TInvestmentData>({
  // title: { type: String, required: true },
  // heading: { type: String, required: true },
  benefits: { type: String, required: true },
  // benefits: { type: [String], required: true },
  // photos: { type: [String], required: true },
});

export const InvestmentDataModel = model<TInvestmentData>(
  'investmentdata',
  InvestmentDataSchema,
);
