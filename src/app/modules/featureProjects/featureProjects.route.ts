import { Router } from "express";
import { FeatureProjectControllers } from "./featureProject.controlle";

const router = Router();

router.post("/create-feature-project", FeatureProjectControllers.createFeatureProject);

router.get("/feature-project", FeatureProjectControllers.getAllFeatureProject);

router.get("/feature-project/:projectId", FeatureProjectControllers.getSingleFeatureProject);

router.patch("/feature-project/:projectId", FeatureProjectControllers.updateFeatureProject);


router.delete("/feature-project/:projectId", FeatureProjectControllers.deleteSingleFeatureProject);



export const FeatureProjectRotues = router;