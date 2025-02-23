import { model, Schema } from "mongoose";
import { TWhyChutiCover } from "./whyChuti.interface";

const WhyChutiSchema = new Schema<TWhyChutiCover>({
    coverPhoto: {type: String, required: true},
    whyChooseChutiDescription: {type: String, required: true},
});


export const WhyChutiModel = model<TWhyChutiCover>("whyChutiCover", WhyChutiSchema);