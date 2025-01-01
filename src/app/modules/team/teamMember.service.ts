import { TTeamMember } from "./teamMember.interface";
import { TeamMemberModel } from "./teamMember.model";

const createTeamMemberIntoDB = async(payload: TTeamMember) => {
    const result = await TeamMemberModel.create(payload)    ;
    
    return result ;
};

const getLastTeamMemberFromDB = async() => {
    const result = await TeamMemberModel.findOne().sort({_id: -1});

    return result;
}


export const TeamMemberServices = {
    createTeamMemberIntoDB,
    getLastTeamMemberFromDB
}
