import { TTeamMember } from "./teamMember.interface";
import { TeamMemberModel } from "./teamMember.model";

const createTeamMemberIntoDB = async(payload: TTeamMember) => {
    const result = await TeamMemberModel.create(payload)    ;
    
    return result ;
};


export const TeamMemberServices = {
    createTeamMemberIntoDB,
}
