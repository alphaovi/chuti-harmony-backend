import mongoose from 'mongoose';
import { TMessageCategory } from './messageCategory.interface';
import { MessageCategoryModel } from './messageCategory.model';

const createMessageCategoryIntoDB = async (payload: TMessageCategory) => {
  try {
    const result = await MessageCategoryModel.create(payload);

    return result;
  } catch (error) {
    throw new Error('Failed to create category');
  }
};

const getAllMessageCategoryFromDB = async () => {
  try {
    const result = await MessageCategoryModel.find();
    return result;
  } catch (error) {
    throw new Error('Failed to fetched data');
  }
};

const deleteSingleMessageCategoryFromDB = async (id: string) => {
  try {
    const objectId = new mongoose.Types.ObjectId(id);

    const result = await MessageCategoryModel.deleteOne({ _id: objectId });

    return result;
  } catch (error) {
    throw new Error('Failed to delete data');
  }
};

export const MessageCategoryServices = {
  createMessageCategoryIntoDB,
  getAllMessageCategoryFromDB,
  deleteSingleMessageCategoryFromDB,
};
