import { model, Schema } from 'mongoose';
import { TInvestmentTitle } from './InvestmentTitle.interface';

const InvestmentTitleSchema = new Schema<TInvestmentTitle>({
  title: { type: String, required: true },
  heading: { type: String, required: true },
});

export const InvestmentTitleModel = model<TInvestmentTitle>(
  'investmentTitle',
  InvestmentTitleSchema,
);
