import mongoose from 'mongoose';
import { TTeamTwo } from './teamTwo.interface';
import { TeamTwoModel } from './teamTwo.model';

const createTeamTwoIntoDB = async (payload: TTeamTwo) => {
  const result = await TeamTwoModel.create(payload);
  return result;
};

const getAllTeamTwoFromDB = async() => {
    const result = await TeamTwoModel.find();
    return result;
}

const deleteSingleTeamTwoFromDB = async(id: string) => {
        const objectId = new mongoose.Types.ObjectId(id);

        const result = await TeamTwoModel.deleteOne({_id: objectId});
        return result;
}





export const TeamTwoServices = {
  createTeamTwoIntoDB,
  getAllTeamTwoFromDB,
  deleteSingleTeamTwoFromDB
};
