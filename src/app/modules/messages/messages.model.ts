import { model, Schema } from 'mongoose';
import { TMessages } from './messages.interface';

const messageSchema = new Schema<TMessages>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    category: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const MessageModel = model<TMessages>('message', messageSchema);
