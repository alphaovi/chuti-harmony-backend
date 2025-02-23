import { WhyChutiControllers } from './whyChuti.controller';
import { Router } from "express";

const router = Router();

router.post("/why-chuti", WhyChutiControllers.createWhyChuti);

router.get("/why-chuti", WhyChutiControllers.getLastData);

router.patch("/why-chuti", WhyChutiControllers.updateLastData);



export const whyChutiCoverRoute = router;