import mongoose from 'mongoose';
import { TProjectFullDetails } from './projectFullDetails.interface';
import { ProjectFullDetailsModel } from './projectFullDetails.model';

const createProjectFullDetailsIntoDB = async (payload: TProjectFullDetails) => {
  const result = await ProjectFullDetailsModel.create(payload);
  return result;
};

const getProjectAllDetailsFromDB = async () => {
  const result = await ProjectFullDetailsModel.find();

  return result;
};

// get single project all details
const getSingleProjectAllDetailsFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);

  const result = await ProjectFullDetailsModel.findOne({ _id: objectId });
  return result;
};

//delete single project details
const deleteSingleProjectFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);

  const result = await ProjectFullDetailsModel.deleteOne({ _id: objectId });
  return result;
};

export const ProjectFullDetailsServices = {
  createProjectFullDetailsIntoDB,
  getProjectAllDetailsFromDB,
  getSingleProjectAllDetailsFromDB,
  deleteSingleProjectFromDB,
};
