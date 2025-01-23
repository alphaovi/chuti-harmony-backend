import { TLifeAtChuti } from './lifeAtChuti.interface';
import { LifeAtChutiModel } from './lifeAtChuti.model';

const createLifeAtChutiDataIntoDB = async (payload: TLifeAtChuti) => {
  const result = await LifeAtChutiModel.create(payload);
  return result;
};

// get last lifeAtChuti Data
const getLastLifeAtChutiData = async () => {
  const result = await LifeAtChutiModel.findOne().sort({ _id: -1 });
  return result;
};

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

export const LifeAtChutiServices = {
  createLifeAtChutiDataIntoDB,
  getLastLifeAtChutiData,
  updateLastDataInLifeAtChuti,
};
