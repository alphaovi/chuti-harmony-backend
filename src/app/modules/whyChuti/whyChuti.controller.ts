import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { WhyChutiServices } from './whyChuti.service';

const createWhyChuti = catchAsync(async (req, res) => {
  try {
    const result = await WhyChutiServices.createWhyChutiCoverIntoDB(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Succesfully created project full details into database.',
      data: result,
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
});

// get data from db
const getLastData = catchAsync(async (req, res) => {
  try {
    const result = await WhyChutiServices.getLastWhyChutiCoverFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Succesfully get why chuti harmony details from database.',
      data: result,
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
});

// update data into database
const updateLastData = catchAsync(async (req, res) => {
  try {
    const result = await WhyChutiServices.updateLastDataIntoDB(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Succesfully created project full details into database.',
      data: result,
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
});

export const WhyChutiControllers = {
  createWhyChuti,
  getLastData,
  updateLastData,
};
