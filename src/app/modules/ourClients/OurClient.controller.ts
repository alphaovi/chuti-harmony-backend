import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OurClientServices } from './OurClient.service';

// create chuti clients
const createOurClients = catchAsync(async (req, res) => {
  const result = await OurClientServices.createOurClientIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully created chuti clients to db',
    data: result,
  });
});

// get chuti clients
const getOurClients = catchAsync(async (req, res) => {
  const result = await OurClientServices.getAllOurClientsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully get all services',
    data: result,
  });
});

// delete single clients from DB
const deletChutiClient = catchAsync(async (req, res) => {
  
  const chutiClientId = req.params.chutiClientId;

  const result =
    await OurClientServices.deleteSingleOurClientFromDB(chutiClientId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully delete a client',
    data: result,
  });
});

export const OurClientControllers = {
  createOurClients,
  getOurClients,
  deletChutiClient
};
