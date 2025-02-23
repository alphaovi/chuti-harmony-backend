import { Router } from "express";
import { InvestmentTitleControllers } from "./InvestmentTitle.controller";

const router = Router();

router.post("/investment-title", InvestmentTitleControllers.createInvestmentTitle);

router.get("/investment-title", InvestmentTitleControllers.getInvestmentTitle);

router.patch("/investment-title", InvestmentTitleControllers.updateInvestmentTitle);


export const InvestmentTitleRoute = router;