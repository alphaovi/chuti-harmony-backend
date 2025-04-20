import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PopUpServices } from './popup.service';

// create pop up data
const createPopUp = catchAsync(async (req, res) => {
  try {
    const data = req.body;

    const result = await PopUpServices.createPopUpIntoDB(data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Create pop up data successfully',
      data: result,
    });
  } catch (error) {
    throw new Error(`Something wrong ${error}`);
  }
});

// get last pop up data
const getLastPopUp = catchAsync(async (req, res) => {
  try {
    const result = await PopUpServices.getLastPopUpFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get the pop up',
      data: result,
    });
  } catch (error) {
    throw new Error(`Something wrong to get the data ${error}`);
  }
});

// update pop up data
const updateLastPopUp = catchAsync(async(req, res) => {
    try{
        const result = await PopUpServices.updateLastPopUpIntoDB(req.body);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Pop up data updated successfully',
            data: result,
          });
    }catch(error){
        throw new Error(`Something wrong for update the data ${error}`);
    }
});


export const PopUpControllers = {
    createPopUp,
    getLastPopUp,
    updateLastPopUp
}