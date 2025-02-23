import { model, Schema } from 'mongoose';
import { TWhyChutiBest } from './whyChutiBest.interface';

const whyChutiBestSchema = new Schema<TWhyChutiBest>({
  name: { type: String, required: true },
  serviceOne: { type: String, required: true },
  details: { type: String, requird: true },
  serviceTwo: { type: String, required: true },
  serviceTwoDescription: { type: String, required: true },
  img: { type: String, required: true },
});

export const WhyChutiBestModel = model<TWhyChutiBest>("whyChutiBestData", whyChutiBestSchema);
