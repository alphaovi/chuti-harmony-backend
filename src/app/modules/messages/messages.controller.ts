import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { MessageServices } from './messages.service';

// create message
const createMessage = catchAsync(async (req, res) => {
  const result = await MessageServices.createMessageIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully created the message',
    data: result,
  });
});

// get all messages
const getAllMessage = catchAsync(async (req, res) => {
  const result = await MessageServices.getAllMessagesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully get all messages from DB',
    data: result,
  });
});

// delete single message
const deleteSingelMessage = catchAsync(async(req, res) => {
    const messageId = req.params.messageId;

    const result = await MessageServices.deleteSingleMessageFromDB(messageId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Delete your message",
        data: result
    });
})

export const MessageControllers = {
  createMessage,
  getAllMessage,
  deleteSingelMessage
};
