import { Router } from 'express';
import { LifeAtChutiControllers } from './lifeAtChuti.controller';

const router = Router();

router.post('/life-at-chuti', LifeAtChutiControllers.createChutiData);

router.get('/life-at-chuti', LifeAtChutiControllers.getLastLifeAtChutiData);

router.patch(
  '/life-at-chuti',
  LifeAtChutiControllers.updateLastDataOfLifeAtChuti,
);

router.delete(
  '/life-at-chuti/:lifeAtChutiId',
  LifeAtChutiControllers.deleteSingleLifeAtChutiData,
);

export const LifeAtChutiRoutes = router;
