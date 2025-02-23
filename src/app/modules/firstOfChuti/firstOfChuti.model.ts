import { model, Schema } from "mongoose";
import { TFirstOfChuti } from "./firstOfChuti.interface";

const FirstOfChutiSchema = new Schema<TFirstOfChuti>({
    name:{type: String, required: true}, 
  image: {type: String, required: true}
});


export const FirstOfChutiModel = model<TFirstOfChuti>("firstOfChuti", FirstOfChutiSchema);