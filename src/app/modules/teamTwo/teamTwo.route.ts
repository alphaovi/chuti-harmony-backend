import { Router } from "express";
import { TeamTwoControllers } from "./teamTwo.controller";

const router = Router();


router.post("/team-two", TeamTwoControllers.createTeamTwo);

router.get("/team-two", TeamTwoControllers.getAllTeamTwo);

router.delete("/team-two/:teamId", TeamTwoControllers.deleteOneTeamTwo);


export const TeamTwoRoutes = router;