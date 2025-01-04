import { model, Schema } from "mongoose";
import { TTeamSenior } from "./teamSenior.interface";

const SeniorTeamSchema = new Schema<TTeamSenior>({
    name: {type: String, required: true},
    designation: {type: String, required: true},
    bio: {type: String, required: true},
    photo: {type: String, required: true}
});


export const SeniorTeamModel = model<TTeamSenior>("teamSenior", SeniorTeamSchema);