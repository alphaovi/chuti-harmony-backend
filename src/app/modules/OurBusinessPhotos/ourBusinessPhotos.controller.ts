import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OurBusinessPhotosServices } from './ourBusinessPhotos.service';

const createOurBusinessPhotos = catchAsync(async (req, res) => {
  try {
    const result =
      await OurBusinessPhotosServices.createOurBusinessPhotosIntoDB(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Succesfully created our business photos into database.',
      data: result,
    });
  } catch (error) {
    if (error) {
      throw new Error(`${error}`);
    }
  }
});

// get all business photos
const getAllOurBusinessPhotos = catchAsync(async (req, res) => {
  try {
    const result =
      await OurBusinessPhotosServices.getAllOurBusinessPhotosFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Succesfully retrived all data from database.',
      data: result,
    });
  } catch (error) {
    if (error) {
      throw new Error(`${error}`);
    }
  }
});

// delete single image

const deleteSingleOurBusinessPhotos = catchAsync(async (req, res) => {
  try {
    const ourBusinessPhotoId = req.params.ourBusinessPhotoId;
    const result =
      await OurBusinessPhotosServices.deleteSinglePhotoFromOurBusiness(
        ourBusinessPhotoId,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Succesfully deleted our business photo from database.',
      data: result,
    });
  } catch (error) {
    if (error) {
      throw new Error(`${error}`);
    }
  }
});

export const OurBusinessPhotosControllers = {
  createOurBusinessPhotos,
  getAllOurBusinessPhotos,
  deleteSingleOurBusinessPhotos,
};
