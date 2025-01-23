import mongoose from 'mongoose';
import { TMessages } from './messages.interface';
import { MessageModel } from './messages.model';

// create message
const createMessageIntoDB = async (payload: TMessages) => {
  const result = await MessageModel.create(payload);

  return result;
};

// get All Message from db
const getAllMessagesFromDB = async () => {
  const result = await MessageModel.find();
  return result;
};

// delete single message from DB
const deleteSingleMessageFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);

  const result = await MessageModel.deleteOne({ _id: objectId });

  return result;
};

export const MessageServices = {
  createMessageIntoDB,
  getAllMessagesFromDB,
  deleteSingleMessageFromDB,
};
