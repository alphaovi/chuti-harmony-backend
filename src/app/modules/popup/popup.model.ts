import { model, Schema } from "mongoose";
import { TPopUp } from "./popup.interface";

const popUpSchema = new Schema<TPopUp>({
    image: {type: String, required: true},
    url: {type: String, required: true}
});

export const PopUpModel = model<TPopUp>("popUp", popUpSchema);