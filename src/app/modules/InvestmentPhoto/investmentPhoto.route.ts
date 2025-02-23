import { Router } from 'express';
import { InvestementPhotoControllers } from './investmentPhoto.controller';


const router = Router();

router.post(
  '/investment-photo',
  InvestementPhotoControllers.createInvestmentPhoto,
);

router.get(
  '/investment-photo',
  InvestementPhotoControllers.getAllInvestmentPhoto,
);

router.delete(
  '/investment-photo/:investmentPhotoId',
  InvestementPhotoControllers.deletSingleInvestmentPhoto,
);

export const InvestmentPhotoRoute = router;
