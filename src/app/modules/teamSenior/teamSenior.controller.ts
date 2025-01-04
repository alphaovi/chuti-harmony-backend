import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

import { SeniorTeamServices } from './teamSenior.service';

const createSeniorTeam = catchAsync(async (req, res) => {
  const result = await SeniorTeamServices.createSeniorTeamIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully created senior team member into database.',
    data: result,
  });
});

const getAllSeniorTeam = catchAsync(async(req, res) => {
    const result =await SeniorTeamServices.getAllSeniorTeamFromDB();
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Succesfully retrived team two members from database.',
        data: result,
      });
});

const deleteOneSeniorTeam = catchAsync(async(req, res) => {
    const seniorTeamId = req.params.seniorTeamId;

    const result = await SeniorTeamServices.deleteSingleSeniorTeamFromDB(seniorTeamId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Succesfully deleted team member from database.',
        data: result,
      });
})



export const SeniorTeamControllers = {
  createSeniorTeam,
  getAllSeniorTeam,
  deleteOneSeniorTeam
};
