import { model, Schema } from "mongoose";
import { TOurBusinessPhotos } from "./ourBusinessPhotos.interface";

const OurBusinessPhotosSchema = new Schema<TOurBusinessPhotos>({
    name: {type: String, required: true},
    image: {type: String, required: true}
});


export const OurBusinessPhotosModel = model<TOurBusinessPhotos>("ourBusinessPhotos", OurBusinessPhotosSchema);