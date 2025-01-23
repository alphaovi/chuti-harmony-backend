import { model, Schema } from 'mongoose';
import { TLifeAtChuti } from './lifeAtChuti.interface';

const lifeAtChutiSchema = new Schema<TLifeAtChuti>({
  coverPhoto: { type: String, required: true },
  descriptionAboutChutiTeam: { type: String, required: true },
});

export const LifeAtChutiModel = model<TLifeAtChuti>(
  'lifeAtChuti',
  lifeAtChutiSchema,
);
