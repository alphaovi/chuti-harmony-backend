import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OurBusinessServices } from './ourBusiness.service';

const createOurBusiness = catchAsync(async (req, res) => {
  try {
    const result = await OurBusinessServices.createOurBusinessIntoDB(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Succesfully created our business into database.',
      data: result,
    });
  } catch (error) {
    if (error) {
      throw new Error(`${error}`);
    }
  }
});

// get all of our business
const getAllOurBusiness = catchAsync(async (req, res) => {
  try {
    const result = await OurBusinessServices.getAllOurBusinessFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Succesfully retrived all details from database.',
      data: result,
    });
  } catch (error) {
    if (error) {
      throw new Error(`${error}`);
    }
  }
});

// delete single data from database
const deleteSingleOurBusiness = catchAsync(async (req, res) => {
  try {
    const ourBusinessId = req.params.ourBusinessId;
    const result =
      await OurBusinessServices.deleteSingleOurBusinessDataFromDB(
        ourBusinessId,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Succesfully deleted a data from our business database.',
      data: result,
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
});

export const OurBusinessControllers = {
  createOurBusiness,
  getAllOurBusiness,
  deleteSingleOurBusiness,
};
