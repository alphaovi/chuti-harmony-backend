import { Router } from "express";
import { TeamMemberController } from "./teamMember.contorller";

const router = Router();

router.post("/team-member", TeamMemberController.createTeamMember);

export const TeamMemberRoutes = router;