import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectFullDetailsServices } from './projectFullDetails.service';

const createProjectAllDetails = catchAsync(async (req, res) => {
  const result =
    await ProjectFullDetailsServices.createProjectFullDetailsIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully created project full details into database.',
    data: result,
  });
});

const getProjectAllDetails = catchAsync(async (req, res) => {
  const result = await ProjectFullDetailsServices.getProjectAllDetailsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully retrived project full details from database.',
    data: result,
  });
});

//get single project details
const getSingleProjectAllDetails = catchAsync(async (req, res) => {
  const projectId = req.params.projectId;
  const result =
    await ProjectFullDetailsServices.getSingleProjectAllDetailsFromDB(
      projectId,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully retrived project details from database.',
    data: result,
  });
});

export const ProjectFullDetailControllers = {
  createProjectAllDetails,
  getProjectAllDetails,
  getSingleProjectAllDetails
};
