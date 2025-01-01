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

export const TeamMemberController = {
  createTeamMember,
};
