import { model,  Schema } from 'mongoose';
import { TTeamTwo } from './teamTwo.interface';

const teamTwoSchema = new Schema<TTeamTwo>({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  bio: { type: String, required: true },
  photo: { type: String, required: true },
});


export const TeamTwoModel = model<TTeamTwo>("teamTwo", teamTwoSchema);