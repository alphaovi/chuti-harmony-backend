import { model, Schema } from 'mongoose';
import { TOurClients } from './OurClients.interface';

const OurClientSchema = new Schema<TOurClients>({
  clientName: { type: String, required: true },
  image: { type: String, required: true },
});


export const OurClientModel = model<TOurClients>("OurClient", OurClientSchema);