import { Router } from "express";
import { WhyChutiBestControllers } from "./whyChutiBest.controller";

const router = Router();


router.post("/why-chuti-best", WhyChutiBestControllers.createWhyChutiBestData);

router.get("/why-chuti-best", WhyChutiBestControllers.getAllWhyChutiBestData);

router.delete("/why-chuti-best/:projectId", WhyChutiBestControllers.deleteSingleWhyChutiBestData);


export const whyChutiBestRoute = router;