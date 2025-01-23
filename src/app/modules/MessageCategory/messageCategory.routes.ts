import { Router } from "express";
import { contactFormControllers } from "./messageCategory.controller";

const router = Router();

router.post("/message-category", contactFormControllers.createCategory);


router.get("/message-category", contactFormControllers.getAllCategory);

router.delete("/message-category/:categoryId", contactFormControllers.deleteSingleCategory);

export const MessageCategoryRoutes = router;