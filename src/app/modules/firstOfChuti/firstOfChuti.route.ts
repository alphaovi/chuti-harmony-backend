import { Router } from 'express';
import { FirstOfChutiControllers } from './firstOfChuti.controller';

const router = Router();

// create
router.post('/first-of-chuti', FirstOfChutiControllers.createFirstOfChuti);

// get all first of chuti
router.get('/first-of-chuti', FirstOfChutiControllers.getAllFirstOfChuti);

// delete single data from first of chuti
router.delete(
  '/first-of-chuti/:firstOfChutiId',
  FirstOfChutiControllers.deleteSingleFirstOfChuti,
);

export const FirstOfChutiRoute = router;
