import mongoose from 'mongoose';
import { TFeatureProjects } from './featureProjects.interface';
import { FeatureProjectsModel } from './featureProjects.model';

const createFeatureProjectIntoDB = async (payload: TFeatureProjects) => {
  const result = await FeatureProjectsModel.create(payload);
  return result;
};

const getAllFeatureProjectsFromDB = async () => {
  const result = await FeatureProjectsModel.find();
  return result;
};

const getSingleFeatureProjectFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const result = await FeatureProjectsModel.findOne({ _id: objectId });
  return result;
};

const updateSingleFeatureProjectIntoDB = async (
  id: string,
  payload: Partial<TFeatureProjects>,
) => {
  const objectId = new mongoose.Types.ObjectId(id);

  const result = await FeatureProjectsModel.findOneAndUpdate(
    { _id: objectId },
    payload,
    { new: true },
  );

  return result;
};

const deleteSingleFeatureProjectIntoDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);

  const result = await FeatureProjectsModel.deleteOne({ _id: objectId });

  return result;
};

export const FeatureProjectServices = {
  createFeatureProjectIntoDB,
  getAllFeatureProjectsFromDB,
  getSingleFeatureProjectFromDB,
  updateSingleFeatureProjectIntoDB,
  deleteSingleFeatureProjectIntoDB,
};
