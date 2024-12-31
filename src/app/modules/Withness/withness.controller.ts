import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { WithnessServices } from './withness.service';

const createWithness = catchAsync(async (req, res) => {
  const result = await WithnessServices.createWithnessIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Withness created successfully',
    data: result,
  });
});

const getLastWithness = catchAsync(async (req, res) => {
  const result = await WithnessServices.getLastWithnessFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Withness retrived successfully',
    data: result,
  });
});

const updateWithness = catchAsync(async (req, res) => {
  const result = await WithnessServices.updateWithnessIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Withness updated successfully',
    data: result,
  });
});

export const WithnessController = {
  createWithness,
  getLastWithness,
  updateWithness
};
