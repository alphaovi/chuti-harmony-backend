import { TOurStory } from './ourStory.interface';
import { OurStoryModel } from './ourStroy.model';

const createOurStoryIntoDB = async (payload: TOurStory) => {
  const result = await OurStoryModel.create(payload);
  return result;
};

const getLastOurStoryFromDB = async () => {
  const result = await OurStoryModel.findOne().sort({ _id: -1 });
  return result;
};

const updateLastStoryIntoDB = async (paylaod: Partial<TOurStory>) => {
  const lastOurStory = await OurStoryModel.findOne().sort({ _id: -1 });

  if (!lastOurStory) {
    throw new Error('There is no data into the database');
  }

  const result = await OurStoryModel.updateOne(
    { _id: lastOurStory._id },
    paylaod,
    { new: true },
  );

  return result;
};

export const OurStoryServices = {
  createOurStoryIntoDB,
  getLastOurStoryFromDB,
  updateLastStoryIntoDB
};
