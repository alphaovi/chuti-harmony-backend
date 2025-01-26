import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { InvestmentPhotoServices } from './InvestmentPhoto.service';

const createInvestmentPhoto = catchAsync(async (req, res) => {
  const result = InvestmentPhotoServices.createInvestmentPhotoIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully created investement Photo into database.',
    data: result,
  });
});

const getAllInvestmentPhoto = catchAsync(async (req, res) => {
  const result = await InvestmentPhotoServices.getAllInvestmentPhotosFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully retrived investement data from database.',
    data: result,
  });
});

const deletSingleInvestmentPhoto = catchAsync(async (req, res) => {
  const investmentPhotoId = req.params.investmentPhotoId;
  const result =
    await InvestmentPhotoServices.deleteSingleInvestmentPhotoFromDB(
      investmentPhotoId,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully deleted investement photo from database.',
    data: result,
  });
});

export const InvestementPhotoControllers = {
  createInvestmentPhoto,
  getAllInvestmentPhoto,
  deletSingleInvestmentPhoto
};
