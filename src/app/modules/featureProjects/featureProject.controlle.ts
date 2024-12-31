import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { FeatureProjectServices } from './featureProjects.service';
import catchAsync from '../../utils/catchAsync';

const createFeatureProject = catchAsync(async (req, res) => {
  const result = await FeatureProjectServices.createFeatureProjectIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feature Project created successfully',
    data: result,
  });
});

const getAllFeatureProject = catchAsync(async (req, res) => {
  const result = await FeatureProjectServices.getAllFeatureProjectsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feature Project retrived successfully',
    data: result,
  });
});

const getSingleFeatureProject = catchAsync(async (req, res) => {
  const projectId = req.params.projectId;
  const result =
    await FeatureProjectServices.getSingleFeatureProjectFromDB(projectId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Feature Project Retrived Successfully',
    data: result,
  });
});

const updateFeatureProject = catchAsync(async (req, res) => {
  const projectId = req.params.projectId;
  const result = await FeatureProjectServices.updateSingleFeatureProjectIntoDB(
    projectId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Feature Project updated Successfully',
    data: result,
  });
});

const deleteSingleFeatureProject = catchAsync(async (req, res) => {
  const projectId = req.params.projectId;
  const result =
    await FeatureProjectServices.deleteSingleFeatureProjectIntoDB(projectId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Feature Project Deleted Successfully',
    data: result,
  });
});

export const FeatureProjectControllers = {
  createFeatureProject,
  getAllFeatureProject,
  getSingleFeatureProject,
  updateFeatureProject,
  deleteSingleFeatureProject,
};
