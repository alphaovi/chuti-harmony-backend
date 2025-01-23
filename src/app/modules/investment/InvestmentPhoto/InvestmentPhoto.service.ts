import mongoose from 'mongoose';
import { TInvestmentPhoto } from './InvestmentPhoto.interface';
import { InvestmentPhotoModel } from './InvestmentPhoto.model';

const createInvestmentPhotoIntoDB = async (payload: TInvestmentPhoto) => {
  const result = await InvestmentPhotoModel.create(payload);
  return result;
};

const getInvestmentPhotoFromDB = async () => {
  const result = await InvestmentPhotoModel.find();
  return result;
};

const getSingleInvestmentPhotoFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);

  const result = await InvestmentPhotoModel.findOne({ _id: objectId });
  return result;
};

const deleteSingleInvestmentPhotoFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);

  const result = await InvestmentPhotoModel.deleteOne({ _id: objectId });
  return result;
};

export const InvestmentPhotoServices = {
  createInvestmentPhotoIntoDB,
  getInvestmentPhotoFromDB,
  getSingleInvestmentPhotoFromDB,
  deleteSingleInvestmentPhotoFromDB,
};
