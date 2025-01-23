import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { LifeAtChutiServices } from './lifeAtChuti.service';

const createChutiData = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await LifeAtChutiServices.createLifeAtChutiDataIntoDB(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Life at chuti data created',
    data: result,
  });
});

// get life at chuti data
const getLastLifeAtChutiData = catchAsync(async (req, res) => {
  const result = await LifeAtChutiServices.getLastLifeAtChutiData();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrived Life At Chuti Data from Database ',
    data: result,
  });
});

// update life at chuti data
const updateLastDataOfLifeAtChuti = catchAsync(async (req, res) => {
  const result = await LifeAtChutiServices.updateLastDataInLifeAtChuti(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Updated the life at chuti data',
    data: result,
  });
});

export const LifeAtChutiControllers = {
  createChutiData,
  getLastLifeAtChutiData,
  updateLastDataOfLifeAtChuti,
};
