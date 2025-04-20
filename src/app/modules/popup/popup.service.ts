import { TPopUp } from './popup.interface';
import { PopUpModel } from './popup.model';

// create pop up into db
const createPopUpIntoDB = async (payload: TPopUp) => {
  try {
    const result = await PopUpModel.create(payload);
    return result;
  } catch (error) {
    throw new Error(`Error is ${error}`);
  }
};

// get last pop up from db
const getLastPopUpFromDB = async () => {
  try {
    const result = await PopUpModel.find().sort({ _id: -1 });
    return result;
  } catch (error) {
    throw new Error(
      `There is something wrong to find the last pop up ${error}`,
    );
  }
};

// update last pop up into db
const updateLastPopUpIntoDB = async (payload: Partial<TPopUp>) => {
  try {
    const lastPopUp = await PopUpModel.findOne().sort({ _id: -1 });

    if (!lastPopUp) {
      throw new Error(`We didn't find any pop up`);
    }

    const result = await PopUpModel.findByIdAndUpdate(
      { _id: lastPopUp._id },
      payload,
      { new: true },
    );

    return result;
  } catch (error) {
    throw new Error(`There is something wrong to update information ${error}`);
  }
};
export const PopUpServices = {
  createPopUpIntoDB,
  getLastPopUpFromDB,
  updateLastPopUpIntoDB
};
