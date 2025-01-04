import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TeamTwoServices } from './teamTwo.service';

const createTeamTwo = catchAsync(async (req, res) => {
  const result = await TeamTwoServices.createTeamTwoIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Succesfully created team two member into database.',
    data: result,
  });
});


const getAllTeamTwo = catchAsync(async(req, res) => {
    const result =await TeamTwoServices.getAllTeamTwoFromDB();
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Succesfully retrived team two members from database.',
        data: result,
      });
});

const deleteOneTeamTwo = catchAsync(async(req, res) => {
    const teamId = req.params.teamId;

    const result = await TeamTwoServices.deleteSingleTeamTwoFromDB(teamId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Succesfully deleted team member from database.',
        data: result,
      });
})

export const TeamTwoControllers = {
    createTeamTwo,
    getAllTeamTwo,
    deleteOneTeamTwo
}