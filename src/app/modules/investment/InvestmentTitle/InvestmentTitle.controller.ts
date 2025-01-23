import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { InvestmentTitleServices } from './InvestmentTitle.service';

const createInvestmentTitle = catchAsync(async (req, res) => {
  const result = await InvestmentTitleServices.createInvestmentTitleIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully created InvestmentTitle into database.',
    data: result,
  });
});

const getInvestmentTitle = catchAsync(async (req, res) => {
  const result = await InvestmentTitleServices.getInvestmentTitleFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully retrived InvestmentTitle from database.',
    data: result,
  });
});

const updateInvestmentTitle = catchAsync(async (req, res) => {
  const result = await InvestmentTitleServices.updateInvestmentTitleIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully updated data into database.',
    data: result,
  });
});

export const InvestmentTitleControllers = {
  createInvestmentTitle,
  getInvestmentTitle,
  updateInvestmentTitle
};
