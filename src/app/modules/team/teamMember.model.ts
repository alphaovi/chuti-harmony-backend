import { model, Schema } from 'mongoose';
import { TTeamMember } from './teamMember.interface';

const teamMemberSchema = new Schema({
  teamCoverPhoto: { type: String, required: true },
  managingDirectorName: { type: String, required: true },

  managingDirectorDetails: { type: String, required: true },
  managingDirectorImage: { type: String, required: true },

  ceoName: { type: String, required: true },
  ceoPhoto: { type: String, required: true },
  ceoAbout: { type: String, required: true },
  ceoAboutMore: { type: String, required: true },
  fullTeamImage: { type: String, required: true },
  fullTeamDescriptionOne: { type: String, required: true },
  fullTeamDescriptionTwo: { type: String, required: true },
});

export const TeamMemberModel = model<TTeamMember>(
  'teamMember',
  teamMemberSchema,
);
