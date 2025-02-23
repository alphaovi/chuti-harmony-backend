import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { WhyChutiBestServices } from './whyChutiBest.service';

// create
const createWhyChutiBestData = catchAsync(async (req, res) => {
  try {
    const result = await WhyChutiBestServices.creaetWhyChutiBestDataIntoDB(
      req.body,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Succesfully created project full details into database.',
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${error.message}`);
    }
  }
});

// get all
const getAllWhyChutiBestData = catchAsync(async (req, res) => {
  try {
    const result = await WhyChutiBestServices.getAllWhyChutiBestDataFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Succesfully get all details from database.',
      data: result,
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
});

// delete single
const deleteSingleWhyChutiBestData = catchAsync(async (req, res) => {
  try {
    const projectId = req.params.projectId;

    const result =
      await WhyChutiBestServices.deleteSingleWhyChutiBestDataFromDB(projectId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Succesfully deleted data database.',
      data: result,
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
});

export const WhyChutiBestControllers = {
  createWhyChutiBestData,
  getAllWhyChutiBestData,
  deleteSingleWhyChutiBestData
};
