import { Router } from "express";
import { NewsEventControllers } from "./newsEvents.controller";

const router = Router();

router.post("/news-event", NewsEventControllers.createNewsEvent);

router.get("/news-event", NewsEventControllers.getAllNewsEvent);

router.get("/news-event/:newsEventId", NewsEventControllers.getSingleNewsEvent);


router.delete("/news-event/:newsEventId", NewsEventControllers.deleteNewsEvent);


export const NewsEventRoute = router;