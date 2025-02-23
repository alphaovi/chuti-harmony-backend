import { Router } from "express";
import { OurBusinessControllers } from "./ourBusiness.controller";

const router = Router();

// create or post
router.post("/our-business", OurBusinessControllers.createOurBusiness);

// get all post
router.get("/our-business", OurBusinessControllers.getAllOurBusiness);

// delete single our business
router.delete("/our-business/:ourBusinessId", OurBusinessControllers.deleteSingleOurBusiness);

export const OurBusinessRoute = router;