import { Router } from 'express';
import { InvestmentDataControllers } from './investmentData.controller';

const router = Router();

router.post('/investment', InvestmentDataControllers.createInvestmentData);

router.get('/investment', InvestmentDataControllers.getAllInvestmentData);

router.delete(
  '/investment/:investmentId',
  InvestmentDataControllers.deleteSingleInvestmentData,
);

export const InvestmentDataRoute = router;
