import  { model, Schema } from 'mongoose';
import { TOurBusiness } from './ourBusiness.interface';

const OurBusinessSchema = new Schema<TOurBusiness>({
  photo: { type: String, required: true },
  name: { type: String, required: true },
  titleOne: { type: String, required: true },
  titleTwo: { type: String, required: true },
  titleThree: { type: String, required: true },
  titleFour: { type: String, required: true },
});


export const OurBusinessModel = model<TOurBusiness>("ourBusiness", OurBusinessSchema);