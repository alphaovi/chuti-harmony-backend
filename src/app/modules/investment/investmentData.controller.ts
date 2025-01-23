import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { InvesmentDataServices } from './investmentData.service';


// create investment data
const createInvestmentData = catchAsync(async (req, res) => {
  const result = await InvesmentDataServices.createInvesmentDataIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully created investment data into database.',
    data: result,
  });
});


// get all investment data
const getAllInvestmentData = catchAsync(async (req, res) => {
  const result = await InvesmentDataServices.getAllInvestmentDataFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully get investement data from database.',
    data: result,
  });
});

// update single investment data
const updateSingleInvestmentData = catchAsync(async (req, res) => {
  const investmentDataId = req.params.investmentDataId;

  const result = await InvesmentDataServices.updateSingleInvestmentDataIntoDB(
    investmentDataId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully updated investement data into database.',
    data: result,
  });
});


// delete single invesetment data
const deleteSingleInvestmentData = catchAsync(async(req, res) => {
  const investmentId = req.params.investmentId;

  const result = await InvesmentDataServices.deleteSingleInvestmentDataFromDB(investmentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully delete invesetment data into database.',
    data: result,
  });
})

export const InvestmentDataControllers = {
  createInvestmentData,
  getAllInvestmentData,
  updateSingleInvestmentData,
  deleteSingleInvestmentData
};
