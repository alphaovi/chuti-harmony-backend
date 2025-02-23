import mongoose from 'mongoose';
import { TOurBusinessPhotos } from './ourBusinessPhotos.interface';
import { OurBusinessPhotosModel } from './ourBusinessPhotos.model';

// create our business photos
const createOurBusinessPhotosIntoDB = async (payload: TOurBusinessPhotos) => {
  try {
    const result = await OurBusinessPhotosModel.create(payload);
    return result;
  } catch (error) {
    if (error) {
      throw new Error(`${error}`);
    }
  }
};

// get all of our business photos
const getAllOurBusinessPhotosFromDB = async () => {
  try {
    const result = await OurBusinessPhotosModel.find();
    return result;
  } catch (error) {
    if (error) {
      throw new Error(`${error}`);
    }
  }
};

// delete single photo= from db
const deleteSinglePhotoFromOurBusiness = async (id: string) => {
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const result = await OurBusinessPhotosModel.deleteOne({ _id: objectId });
    return result;
  } catch (error) {
    if (error) {
      throw new Error(`${error}`);
    }
  }
};

export const OurBusinessPhotosServices = {
  createOurBusinessPhotosIntoDB,
  getAllOurBusinessPhotosFromDB,
  deleteSinglePhotoFromOurBusiness
};
