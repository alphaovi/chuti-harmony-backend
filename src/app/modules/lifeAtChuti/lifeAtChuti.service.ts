import mongoose from 'mongoose';
import { TLifeAtChuti } from './lifeAtChuti.interface';
import { LifeAtChutiModel } from './lifeAtChuti.model';

const createLifeAtChutiDataIntoDB = async (payload: TLifeAtChuti) => {
  const result = await LifeAtChutiModel.create(payload);
  return result;
};
// get all life at chuti data
const getLastLifeAtChutiData = async () => {
  const result = await LifeAtChutiModel.find();
  return result;
};

// get last lifeAtChuti Data
// const getLastLifeAtChutiData = async () => {
//   const result = await LifeAtChutiModel.find().sort({ _id: -1 });
//   return result;
// };

// update last Data in Life At Chuti
const updateLastDataInLifeAtChuti = async (payload: Partial<TLifeAtChuti>) => {
  const lastData = await LifeAtChutiModel.findOne().sort({ _id: -1 });

  if (!lastData) {
    throw new Error('There is no data in the database');
  }

  const result = await LifeAtChutiModel.findByIdAndUpdate(
    { _id: lastData._id },
    payload,
    { new: true },
  );

  return result;
};

// delete single
const deleteSingleLifeAtChutiPhoto = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);

  const result = await LifeAtChutiModel.deleteOne({ _id: objectId });
  return result;
};


export const LifeAtChutiServices = {
  createLifeAtChutiDataIntoDB,
  getLastLifeAtChutiData,
  updateLastDataInLifeAtChuti,
  deleteSingleLifeAtChutiPhoto
};
