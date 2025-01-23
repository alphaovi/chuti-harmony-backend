import { model, Schema } from 'mongoose';
import { TNewsEvents } from './newsEvents.interface';

const newsEventSchema = new Schema<TNewsEvents>(
  {
    title: { type: String, required: true },
    coverphoto: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    newsOrEvent: { type: String, enum: ['News', 'Events'], required: true },
    photos: { type: [String], default: [] },
  },
  {
    timestamps: true,
  },
);

export const NewsEventModel = model<TNewsEvents>('newsEvent', newsEventSchema);
