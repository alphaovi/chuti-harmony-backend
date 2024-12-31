import { TWitness } from './Withness.interface';
import { WithnessModel } from './Withness.model';

const createWithnessIntoDB = async (payload: TWitness) => {
  const result = await WithnessModel.create(payload);
  return result;
};

// const getAllWithnessFromDB = async () => {
//   const result = await WithnessModel.find();
//   return result;
// };

const getLastWithnessFromDB = async () => {
  const result = await WithnessModel.findOne().sort({ _id: -1 });
  return result;
};

const updateWithnessIntoDB = async (payload: Partial<TWitness>) => {
  const lastWithness = await WithnessModel.findOne().sort({ _id: -1 });

  if (!lastWithness) {
    throw new Error('No document found to update');
  }

  const result = await WithnessModel.updateOne(
    { _id: lastWithness._id },
    payload,
    { new: true },
  );
  return result;
};

export const WithnessServices = {
  createWithnessIntoDB,
  //   getAllWithnessFromDB,
  getLastWithnessFromDB,
  updateWithnessIntoDB,
};
