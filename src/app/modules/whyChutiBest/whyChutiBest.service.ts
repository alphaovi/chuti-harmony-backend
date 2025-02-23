import mongoose from 'mongoose';
import { TWhyChutiBest } from './whyChutiBest.interface';
import { WhyChutiBestModel } from './whyChutiBest.model';

const creaetWhyChutiBestDataIntoDB = async (payload: TWhyChutiBest) => {
  try {
    const result = await WhyChutiBestModel.create(payload);
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${error.message}`);
    }
  }
};

// get all data

const getAllWhyChutiBestDataFromDB = async () => {
  try {
    const result = WhyChutiBestModel.find();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${error.message}`);
    }
  }
};

// delete single why chuti best data from db
const deleteSingleWhyChutiBestDataFromDB = async (id: string) => {
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const result = await WhyChutiBestModel.deleteOne({ _id: objectId });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${error.message}`);
    }
  }
};

export const WhyChutiBestServices = {
  creaetWhyChutiBestDataIntoDB,
  getAllWhyChutiBestDataFromDB,
  deleteSingleWhyChutiBestDataFromDB
};
