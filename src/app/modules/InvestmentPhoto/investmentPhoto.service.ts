import mongoose from 'mongoose';
import { TInvestmentPhoto } from './investmentPhoto.interface';
import { InvestmentPhotoModel } from './investmentPhoto.model';


const createInvestmentPhotoIntoDB = async (payload: TInvestmentPhoto) => {
  const result = await InvestmentPhotoModel.create(payload);
  return result;
};

const getAllInvestmentPhotosFromDB = async () => {
  const result = await InvestmentPhotoModel.find();
  return result;
};

const deleteSingleInvestmentPhotoFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);

  const result = await InvestmentPhotoModel.deleteOne({ _id: objectId });
  return result;
};

export const InvestmentPhotoServices = {
  createInvestmentPhotoIntoDB,
  getAllInvestmentPhotosFromDB,
  deleteSingleInvestmentPhotoFromDB
};
