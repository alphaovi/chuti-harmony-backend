import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ConnectServices } from './connect.service';

const createConnect = catchAsync(async (req, res) => {
  const result = await ConnectServices.createConnectIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully created connect into the database',
    data: result,
  });
});

const getLastConnect = catchAsync(async (req, res) => {
  const result = await ConnectServices.getLastConnectFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully retrived connect from database',
    data: result,
  });
});


const updateConnect = catchAsync(async(req, res) => {
    const result = await ConnectServices.updateLastConnectIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Successfully updated connect into database',
        data: result,
      });

});


export const ConnectControllers = {
  createConnect,
  getLastConnect,
  updateConnect
};
