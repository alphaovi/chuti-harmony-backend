import { Router } from "express"
import { InvestmentPhotoControllers } from "./InvestmentPhoto.controller";


const router = Router();

router.post("/investmentPhoto", InvestmentPhotoControllers.createInvestmentPhoto);

router.get("/investmentPhoto", InvestmentPhotoControllers.getAllInvestmentPhoto);

router.get("/investmentPhoto/:investmentId", InvestmentPhotoControllers.getSingleInvestmentPhoto);

router.delete("/investmentPhoto/:investmentId", InvestmentPhotoControllers.deleteSingleInvestmentPhoto);





export const InvestmentPhotoRoute = router;