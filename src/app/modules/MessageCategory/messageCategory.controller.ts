import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { MessageCategoryServices } from './messageCategory.service';
import catchAsync from '../../utils/catchAsync';

const createCategory = catchAsync(async (req, res) => {
  const result = await MessageCategoryServices.createMessageCategoryIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully created message category',
    data: result,
  });
});

const getAllCategory = catchAsync(async (req, res) => {
  const result = await MessageCategoryServices.getAllMessageCategoryFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully retrived message Category',
    data: result,
  });
});

const deleteSingleCategory = catchAsync(async (req, res) => {

  const categoryId = req.params.categoryId;
  const result =
    await MessageCategoryServices.deleteSingleMessageCategoryFromDB(categoryId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully deleted  message Category',
    data: result,
  });
});

export const contactFormControllers = {
  createCategory,
  getAllCategory,
  deleteSingleCategory
};
