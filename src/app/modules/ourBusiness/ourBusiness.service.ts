import mongoose from 'mongoose';
import { TOurBusiness } from './ourBusiness.interface';
import { OurBusinessModel } from './ourBusiness.model';

// create our business
const createOurBusinessIntoDB = async (payload: TOurBusiness) => {
  try {
    const result = await OurBusinessModel.create(payload);
    return result;
  } catch (error) {
    if (error) {
      throw new Error(`${error}`);
    }
  }
};

// get all our business
const getAllOurBusinessFromDB = async () => {
  try {
    const result = await OurBusinessModel.find();
    return result;
  } catch (error) {
    if (error) {
      throw new Error(`${error}`);
    }
  }
};

// delete business from db
const deleteSingleOurBusinessDataFromDB = async (id: string) => {
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const result = await OurBusinessModel.deleteOne({ _id: objectId });
    return result;
  } catch (error) {
    if (error) {
      throw new Error(`${error}`);
    }
  }
};

export const OurBusinessServices = {
  createOurBusinessIntoDB,
  getAllOurBusinessFromDB,
  deleteSingleOurBusinessDataFromDB
};
