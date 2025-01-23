import mongoose from 'mongoose';
import { TNewsEvents } from './newsEvents.interface';
import { NewsEventModel } from './newsEvents.model';

const createNewsEventsIntoDB = async (payload: TNewsEvents) => {
  const result = await NewsEventModel.create(payload);
  return result;
};

const getAllNewsEventsFromDB = async () => {
  const result = await NewsEventModel.find();
  return result;
};

const getSingleNewsEventFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);

  const result = await NewsEventModel.findOne({ _id: objectId });
  return result;
};

const deletNewsEventFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);

  const result = await NewsEventModel.deleteOne({ _id: objectId });
  return result;
};

export const NewsEventsServices = {
  createNewsEventsIntoDB,
  getAllNewsEventsFromDB,
  getSingleNewsEventFromDB,
  deletNewsEventFromDB,
};
