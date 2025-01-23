import { model, Schema } from 'mongoose';
import { TProjectFullDetails } from './projectFullDetails.interface';

const ProjecFulltDetailsSchema = new Schema<TProjectFullDetails>({
  projectName: { type: String, required: true },
  projectCoverPhoto: { type: String, required: true },
  // at a glance
  status: {
    type: String,
    enum: ['ongoing', 'upcoming', 'completed'],
    required: true,
  },
  address: { type: String, required: true },
  architectName: { type: String, required: true },
  landArea: { type: String, required: true },
  facing: { type: String, required: true },
  frontRoad: { type: String, required: true },
  sizeOfUnits: { type: String, required: true },
  numberOfCarParking: { type: String, required: true },
  landScapingConsultant: { type: String, required: true },
  loadOrientation: { type: String, required: true },
  specialtyOfTheLand: { type: String, required: true },
  numberOfApartments: { type: Number, required: true },
  numberOfBaseMents: { type: Number, required: true },
  rajukApprovalNo: { type: String, required: true },
  projectPhotos: {type: [String], default: []},
});

export const ProjectFullDetailsModel = model<TProjectFullDetails>(
  'everyProjectFullDetail',
  ProjecFulltDetailsSchema,
);
