import { model, Schema } from 'mongoose';
import { TWitness } from './Withness.interface';

const WithnessSchema = new Schema<TWitness>({
  image: { type: String, required: true },
  totalAreaInputOne: { type: Number, required: true },
  totalAreaInputTwo: { type: String, required: true },
  totalAreaInputThree: { type: String, required: true },
  activeYearsInputOne: { type: Number, required: true },
  activeYearsInputTwo: { type: String, required: true },
  activeYearsInputThree: { type: String, required: true },
  completedProjectsInputOne: { type: Number, required: true },
  completedProjectsInputTwo: { type: String, required: true },
  completedProjectsInputThree: { type: String, required: true },
  numberOfProjectsInputOne: { type: Number, required: true },
  numberOfProjectsInputTwo: { type: String, required: true },
  numberOfProjectsInputThree: { type: String, required: true },
  clientsInputOne: { type: Number, required: true },
  clientsInputTwo: { type: String, required: true },
  clientsInputThree: { type: String, required: true },
  OtherThingsInputOne: { type: Number, required: true },
  OtherThingsInputTwo: { type: String, required: true },
  OtherThingsInputThree: { type: String, required: true },
});

export const WithnessModel = model<TWitness>('Withness', WithnessSchema);
