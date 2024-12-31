import { model, Schema } from 'mongoose';
import { TFeatureProjects } from './featureProjects.interface';

const featureProjectSchema = new Schema<TFeatureProjects>({
  projectType: { type: String, required: true },
  projectName: { type: String, required: true },
  address: { type: String, required: true },
  projectImg: { type: String, required: true },
  projectVideo: { type: String, required: true },
});

export const FeatureProjectsModel = model<TFeatureProjects>(
  'FeatureProject',
  featureProjectSchema,
);
