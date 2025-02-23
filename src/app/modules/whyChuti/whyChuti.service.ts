import { TWhyChutiCover } from './whyChuti.interface';
import { WhyChutiModel } from './whyChuti.model';

const createWhyChutiCoverIntoDB = async (payload: TWhyChutiCover) => {
  try {
    const result = await WhyChutiModel.create(payload);
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to create Why Chuti Cover: ${error.message}`);
    } else {
      throw new Error('Faled to create why chuti cover: Unexpected error');
    }
  }
};

// get last why chuti cover
const getLastWhyChutiCoverFromDB = async () => {
  try {
    const result = await WhyChutiModel.findOne().sort({ _id: -1 });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${error.message}`);
    } else {
      throw new Error(`Failed to get the data : Unexpected Error`);
    }
  }
};

// update last data into database
const updateLastDataIntoDB = async (payload: Partial<TWhyChutiCover>) => {
  try {
    const lastDataFromDB = await WhyChutiModel.findOne().sort({ _id: -1 });

    if (!lastDataFromDB) {
      throw new Error("Didn't  get Data");
    }

    const result = await WhyChutiModel.findByIdAndUpdate(
      { _id: lastDataFromDB._id },
      payload,
      { new: true },
    );
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${error.message}`);
    } else {
      throw new Error(`Failed to update data: unexpected error`);
    }
  }
};

export const WhyChutiServices = {
  createWhyChutiCoverIntoDB,
  getLastWhyChutiCoverFromDB,
  updateLastDataIntoDB
};
