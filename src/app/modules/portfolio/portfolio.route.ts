import { Router } from "express";
import { PortfolioController } from "./portfolio.controller";

const router = Router();

router.post("/create-portfolio", PortfolioController.createPortfolioDescription);

router.get("/", PortfolioController.getPortfolio);

router.patch("/update-portfolio", PortfolioController.updatePortfolio);

export const PortfolioRoutes = router;