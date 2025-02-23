import { model, Schema } from 'mongoose';
import { TNewsEvents } from './newsEvents.interface';

const newsEventSchema = new Schema<TNewsEvents>(
  {
    title: { type: String, required: true },
    coverphoto: { type: String, required: true },
    date: { type: String, required: true },
    source: { type: String, required: true },
    description1: { type: String, required: true },
    description2: { type: String, required: true },
    description3: { type: String, required: true },
    description4: { type: String, required: true },
    description5: { type: String, required: true },
    description6: { type: String, required: true },
    description7: { type: String, required: true },
    description8: { type: String, required: true },
    newsEventSourceLink: { type: String, required: true },
    newsOrEvent: { type: String, enum: ['News', 'Events'], required: true },
    photos: { type: [String], default: [] },
  },
  {
    timestamps: true,
  },
);

export const NewsEventModel = model<TNewsEvents>('newsEvent', newsEventSchema);
