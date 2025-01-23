import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ExploreProjectServices } from './exploreProject.service';

const createExploreProject = catchAsync(async (req, res) => {
  const result = await ExploreProjectServices.createExploreProjectIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Created Explore Project',
    data: result,
  });
});

const getAllExploreProject = catchAsync(async (req, res) => {
  const result = await ExploreProjectServices.getAllExploreProjectsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully retrived all exlores project',
    data: result,
  });
});

const deleteSingleExploreProject = catchAsync(async (req, res) => {
  const projectId = req.params.projectId;

  const result =
    await ExploreProjectServices.deleteExploreProjectFromDB(projectId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully retrived all exlores project',
    data: result,
  });
});

export const ExploreProjectController = {
  createExploreProject,
  getAllExploreProject,
  deleteSingleExploreProject,
};
