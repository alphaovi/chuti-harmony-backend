import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { NewsEventsServices } from './newsEvents.service';

const createNewsEvent = catchAsync(async (req, res) => {
  const result = NewsEventsServices.createNewsEventsIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully created senior team member into database.',
    data: result,
  });
});

const getAllNewsEvent = catchAsync(async (req, res) => {
  const result = await NewsEventsServices.getAllNewsEventsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully retrived all news and events data',
    data: result,
  });
});

const getSingleNewsEvent = catchAsync(async (req, res) => {
  const newsEventId = req.params.newsEventId;
  const result = await NewsEventsServices.getSingleNewsEventFromDB(newsEventId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully retrived news and events data',
    data: result,
  });
});

const deleteNewsEvent = catchAsync(async (req, res) => {
  const newsEventId = req.params.newsEventId;

  const result = await NewsEventsServices.deletNewsEventFromDB(newsEventId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully deleted your news and events data',
    data: result,
  });
});

export const NewsEventControllers = {
  createNewsEvent,
  getAllNewsEvent,
  getSingleNewsEvent,
  deleteNewsEvent,
};
