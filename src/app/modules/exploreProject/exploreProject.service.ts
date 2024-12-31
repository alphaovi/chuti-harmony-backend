import mongoose from 'mongoose';
import { TExploreProject } from './exploreProject.interface';
import { ExploreProjectModel } from './exploreProject.model';

const createExploreProjectIntoDB = async (payload: TExploreProject) => {
  const result = await ExploreProjectModel.create(payload);

  return result;
};

const getAllExploreProjectsFromDB = async () => {
  const result = await ExploreProjectModel.find();
  return result;
};

const deleteExploreProjectFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const result = await ExploreProjectModel.deleteOne({ _id: objectId });

  return result;
};

export const ExploreProjectServices = {
  createExploreProjectIntoDB,
  getAllExploreProjectsFromDB,
  deleteExploreProjectFromDB
};
