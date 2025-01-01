import { TTeamMember } from './teamMember.interface';
import { TeamMemberModel } from './teamMember.model';

const createTeamMemberIntoDB = async (payload: TTeamMember) => {
  const result = await TeamMemberModel.create(payload);

  return result;
};

const getLastTeamMemberFromDB = async () => {
  const result = await TeamMemberModel.findOne().sort({ _id: -1 });

  return result;
};

const updateTeamMemberIntoDB = async (payload: Partial<TTeamMember>) => {
  const lastTeamMember = await TeamMemberModel.findOne().sort({ _id: -1 });

  if (!lastTeamMember) {
    throw new Error('There is no data into the database');
  }

  const result = await TeamMemberModel.updateOne(
    { _id: lastTeamMember._id },
    payload,
    { new: true },
  );

  return result ;
};

export const TeamMemberServices = {
  createTeamMemberIntoDB,
  getLastTeamMemberFromDB,
  updateTeamMemberIntoDB
};
