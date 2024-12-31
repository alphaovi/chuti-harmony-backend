import { model, Schema } from 'mongoose';
import { TPortfolio } from './portfolio.interface';

const portfolioSchema = new Schema<TPortfolio>({
  description: { type: String, required: true },
});

// model

export const PortfolioModel = model<TPortfolio>("portfolio", portfolioSchema);

