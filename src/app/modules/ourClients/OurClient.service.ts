import mongoose from 'mongoose';
import { TOurClients } from './OurClients.interface';
import { OurClientModel } from './ourClients.model';

// create clients data into DB
const createOurClientIntoDB = async (payload: TOurClients) => {
  try {
    const result = await OurClientModel.create(payload);
    return result;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

// get all our clients from DB
const getAllOurClientsFromDB = async () => {
  try {
    const result = await OurClientModel.find();
    return result;
  } catch (error) {
    throw new Error(`Something went wrong to get all our clients ${error}`);
  }
};

// delete single client from DB
const deleteSingleOurClientFromDB = async (id: string) => {
  try {
    const objectId = new mongoose.Types.ObjectId(id);

    const result = await OurClientModel.deleteOne({ _id: objectId });
    return result;
  } catch (error) {
    throw new Error(`Something wrong to delete single client from DB ${error}`);
  }
};

export const OurClientServices = {
  createOurClientIntoDB,
  getAllOurClientsFromDB,
  deleteSingleOurClientFromDB,
};
