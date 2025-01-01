import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TeamMemberServices } from './teamMember.service';

const createTeamMember = catchAsync(async (req, res) => {
  const result = TeamMemberServices.createTeamMemberIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully created team member into database.',
    data: result,
  });
});


const getLastTeam = catchAsync(async(req, res) => {
    const result = await TeamMemberServices.getLastTeamMemberFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Succesfully retrived team member into database.',
        data: result,
      });
});


const updateLastTeamMember = catchAsync(async(req, res) => {
    const result = await TeamMemberServices.updateTeamMemberIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Succesfully updated team member into database.',
        data: result,
      });



})

export const TeamMemberController = {
  createTeamMember,
  getLastTeam,
  updateLastTeamMember
};
