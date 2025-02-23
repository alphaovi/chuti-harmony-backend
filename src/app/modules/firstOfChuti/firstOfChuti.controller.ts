import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { FirstOfChutiServices } from './firstOfChuti.service';

// create first of chuti
const createFirstOfChuti = catchAsync(async (req, res) => {
  try {
    const result = await FirstOfChutiServices.createFirstOfChutiIntoDB(
      req.body,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Succesfully created first of chuti into database.',
      data: result,
    });
  } catch (error) {
    if (error) {
      throw new Error(`${error}`);
    }
  }
});

// get all first of chuti all
const getAllFirstOfChuti = catchAsync(async (req, res) => {
  try {
    const result = await FirstOfChutiServices.getAllFirstOfChutiFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Succesfully get all first of chuti data from database.',
      data: result,
    });
  } catch (error) {
    if (error) {
      throw new Error(`${error}`);
    }
  }
});

// delete single first of chuti data
const deleteSingleFirstOfChuti = catchAsync(async (req, res) => {
  try {
    const firstOfChutiId = req.params.firstOfChutiId;
    const result =
      await FirstOfChutiServices.deleteSingleFirstOfChutiFromDB(firstOfChutiId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Succesfully deleted data from first of chuti database.',
      data: result,
    });
  } catch (error) {
    if (error) {
      throw new Error(`${error}`);
    }
  }
});

export const FirstOfChutiControllers = {
  createFirstOfChuti,
  getAllFirstOfChuti,
  deleteSingleFirstOfChuti,
};
