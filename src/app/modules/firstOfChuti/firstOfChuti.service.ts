import mongoose from 'mongoose';
import { TFirstOfChuti } from './firstOfChuti.interface';
import { FirstOfChutiModel } from './firstOfChuti.model';

const createFirstOfChutiIntoDB = async (payload: TFirstOfChuti) => {
  try {
    const result = await FirstOfChutiModel.create(payload);
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${error.message}`);
    }
  }
};

const getAllFirstOfChutiFromDB = async () => {
  try {
    const result = await FirstOfChutiModel.find();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${error.message}`);
    }
  }
};

const deleteSingleFirstOfChutiFromDB = async (id: string) => {
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const result = await FirstOfChutiModel.deleteOne({ _id: objectId });
    return result;
  } catch (error) {
    if (error) {
      throw new Error(`${error}`);
    }
  }
};
export const FirstOfChutiServices = {
  createFirstOfChutiIntoDB,
  getAllFirstOfChutiFromDB,
  deleteSingleFirstOfChutiFromDB
};
