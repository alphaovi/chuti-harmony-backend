import mongoose from 'mongoose';
import { TTeamSenior } from './teamSenior.interface';
import { SeniorTeamModel } from './teamSenior.model';

const createSeniorTeamIntoDB = async (payload: TTeamSenior) => {
  const result = await SeniorTeamModel.create(payload);
  return result;
};


const getAllSeniorTeamFromDB = async() => {
    const result = await SeniorTeamModel.find();
    return result;
}

const deleteSingleSeniorTeamFromDB = async(id: string) => {
        const objectId = new mongoose.Types.ObjectId(id);

        const result = await SeniorTeamModel.deleteOne({_id: objectId});
        return result;
}


export const SeniorTeamServices = {
  createSeniorTeamIntoDB,
  getAllSeniorTeamFromDB,
  deleteSingleSeniorTeamFromDB
};
