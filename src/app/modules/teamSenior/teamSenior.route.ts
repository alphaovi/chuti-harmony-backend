import { Router } from "express";
import { SeniorTeamControllers } from "./teamSenior.controller";

const router = Router();

router.post("/senior-team", SeniorTeamControllers.createSeniorTeam);

router.get("/senior-team", SeniorTeamControllers.getAllSeniorTeam);

router.delete("/senior-team/:seniorTeamId", SeniorTeamControllers.deleteOneSeniorTeam);


export const SeniorTeamRoutes = router;