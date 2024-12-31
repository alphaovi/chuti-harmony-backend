import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

import { PortfolioServices } from './portfolio.service';
import catchAsync from '../../utils/catchAsync';

const createPortfolioDescription = catchAsync(async (req, res) => {
  const result = await PortfolioServices.createPortfolioIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Portfolio Description is created successfully',
    data: result,
  });
});

const getPortfolio = catchAsync(async (req, res) => {
  const result = await PortfolioServices.getPortfolioFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Portfolio Description retrived successfully',
    data: result,
  });
});

const updatePortfolio = catchAsync(async (req, res) => {
  const result = await PortfolioServices.updatePortfolioIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Portfolio Description updated successfully',
    data: result,
  });
});

export const PortfolioController = {
  createPortfolioDescription,
  getPortfolio,
  updatePortfolio,
};
