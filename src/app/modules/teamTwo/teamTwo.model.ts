import { model, Schema } from 'mongoose';
import { TTeamTwo } from './teamTwo.interface';

const teamTwoSchema = new Schema<TTeamTwo>({
  name: { type: String, required: [true, 'Name is Required'] },
  designation: { type: String, required: [true, 'Name is Required'] },
  bio: { type: String, required: [true, 'Name is Required'] },
  photo: { type: String, required: [true, 'Name is Required'] },
});

export const TeamTwoModel = model<TTeamTwo>('teamTwo', teamTwoSchema);
