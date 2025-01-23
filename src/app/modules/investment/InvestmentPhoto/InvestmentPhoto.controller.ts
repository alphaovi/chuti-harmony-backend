import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { InvestmentPhotoServices } from './InvestmentPhoto.service';

const createInvestmentPhoto = catchAsync(async (req, res) => {
  const result = await InvestmentPhotoServices.createInvestmentPhotoIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully created investment photo into database.',
    data: result,
  });
});

const getAllInvestmentPhoto = catchAsync(async (req, res) => {
  const result = await InvestmentPhotoServices.getInvestmentPhotoFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully retrived data from database.',
    data: result,
  });
});

const getSingleInvestmentPhoto = catchAsync(async (req, res) => {
  const investmentId = req.params.investmentId;

  const result =
    await InvestmentPhotoServices.getSingleInvestmentPhotoFromDB(investmentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message:
      'Succesfully retrived single photo from investment photo from database.',
    data: result,
  });
});

const deleteSingleInvestmentPhoto = catchAsync(async (req, res) => {
  const investmentId = req.params.investmentId;

  const result =
    await InvestmentPhotoServices.deleteSingleInvestmentPhotoFromDB(
      investmentId,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully deleted data from database.',
    data: result,
  });
});
export const InvestmentPhotoControllers = {
  createInvestmentPhoto,
  getAllInvestmentPhoto,
  getSingleInvestmentPhoto,
  deleteSingleInvestmentPhoto,
};
