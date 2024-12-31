import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OurStoryServices } from './ourStory.service';

const createOurStory = catchAsync(async (req, res) => {
  const result = await OurStoryServices.createOurStoryIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully created Our Story into the database',
    data: result,
  });
});

const getLastOurStory = catchAsync(async (req, res) => {
  const result = await OurStoryServices.getLastOurStoryFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully find Our Story from the database',
    data: result,
  });
});

const updateLastStory = catchAsync(async (req, res) => {
  const result = await OurStoryServices.updateLastStoryIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully updated Our Story into database',
    data: result,
  });
});

export const OurStoryControllers = {
  createOurStory,
  getLastOurStory,
  updateLastStory,
};
