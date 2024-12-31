import { Router } from "express";
import { OurStoryControllers } from "./ourStory.controller";

const router  = Router();

router.post("/our-story", OurStoryControllers.createOurStory);

router.get("/our-story", OurStoryControllers.getLastOurStory);

router.patch("/our-story", OurStoryControllers.updateLastStory);

export const OurStoryRoutes= router;