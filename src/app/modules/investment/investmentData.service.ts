import mongoose from 'mongoose';
import { TInvestmentData } from './investmentData.interface';
import { InvestmentDataModel } from './investmentData.model';

const createInvesmentDataIntoDB = async (payload: TInvestmentData) => {
  const result = await InvestmentDataModel.create(payload);
  return result;
};

const getAllInvestmentDataFromDB = async () => {
  const result = await InvestmentDataModel.find();
  return result;
};

const updateSingleInvestmentDataIntoDB = async (
  id: string,
  payload: Partial<TInvestmentData>,
) => {
  const obejctId = new mongoose.Types.ObjectId(id);

  const result = await InvestmentDataModel.findOneAndUpdate(
    { _id: obejctId },
    payload,
    { new: true },
  );

  return result;
};

const deleteSingleInvestmentDataFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);

  const result = await InvestmentDataModel.deleteOne({ _id: objectId });
  return result;
};

// const addBenifit = async (id: string, newBenefit: string) => {
//   const objectId = new mongoose.Types.ObjectId(id);
//   const result = await InvestmentDataModel.findOne(
//     { _id: objectId },
//     { $push: { benifits: newBenefit } },
//     { new: true },
//   );
//   return result;
// };

// const removeBenifit = async (id: string, benefitToRemove: string) => {
//   const objectId = new mongoose.Types.ObjectId(id);

//   const result = await InvestmentDataModel.findOne(
//     { _id: objectId },
//     { $pull: { benefits: benefitToRemove } },
//     { new: true },
//   );
//   return result;
// };

// const addPhoto = async (id: string, newPhoto: string) => {
//   const objectId = new mongoose.Types.ObjectId(id);

//   const result = await InvestmentDataModel.findByIdAndUpdate(
//     { _id: objectId },
//     { $push: { photos: newPhoto } },
//     { new: true },
//   );
//   return result;
// };

// const removePhoto = async (id: string, photoToRemove: string) => {
//   const objectId = new mongoose.Types.ObjectId(id);

//   const result = await InvestmentDataModel.findByIdAndUpdate(
//     { _id: objectId },
//     { $pull: { photos: photoToRemove } },
//     { new: true },
//   );

//   return result;
// };

export const InvesmentDataServices = {
  createInvesmentDataIntoDB,
  getAllInvestmentDataFromDB,
  updateSingleInvestmentDataIntoDB,
  deleteSingleInvestmentDataFromDB,
  // addBenifit,
  // removeBenifit,
  // addPhoto,
  // removePhoto,
};
