import { Router } from "express";
import { TeamMemberController } from "./teamMember.contorller";

const router = Router();

router.post("/team-member", TeamMemberController.createTeamMember);

router.get("/team-member", TeamMemberController.getLastTeam);

router.patch("/team-member", TeamMemberController.updateLastTeamMember);

export const TeamMemberRoutes = router;