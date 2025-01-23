import { model, Schema } from 'mongoose';
import { TMessageCategory } from './messageCategory.interface';

const contactFormSchema = new Schema<TMessageCategory>({
  
  messageCategory: { type: String, required: true },
},{
  timestamps: true,
}
);

export const MessageCategoryModel = model<TMessageCategory>(
  "messageCategory",
  contactFormSchema,
);
