import { Router } from "express";
import { ConnectControllers } from "./connect.controller";

const router = Router();

router.post("/connect", ConnectControllers.createConnect);

router.get("/connect", ConnectControllers.getLastConnect);

router.patch("/connect", ConnectControllers.updateConnect);

export const ConnectRoutes = router;
