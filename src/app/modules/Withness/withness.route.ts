import { Router } from "express";
import { WithnessController } from "./withness.controller";

const router = Router();

router.post("/withness", WithnessController.createWithness); 

router.get("/withness", WithnessController.getLastWithness);

router.patch("/withness", WithnessController.updateWithness);



export const WithnessRoutes = router;