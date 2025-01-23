import { Router } from "express";
import { LifeAtChutiControllers } from "./lifeAtChuti.controller";

const router = Router();

router.post("/life-at-chuti", LifeAtChutiControllers.createChutiData);

router.get("/life-at-chuti", LifeAtChutiControllers.getLastLifeAtChutiData);

router.patch("/life-at-chuti", LifeAtChutiControllers.updateLastDataOfLifeAtChuti);


export const LifeAtChutiRoutes = router;