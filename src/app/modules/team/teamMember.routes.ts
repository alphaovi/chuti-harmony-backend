import { Router } from "express";
import { TeamMemberController } from "./teamMember.contorller";

const router = Router();

router.post("/team-member", TeamMemberController.createTeamMember);

router.get("/team-member", TeamMemberController.getLastTeam);

export const TeamMemberRoutes = router;