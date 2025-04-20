import { Router } from 'express';
import { PopUpControllers } from './popup.controller';

const router = Router();

router.post('/pop-up', PopUpControllers.createPopUp);

router.get('/pop-up', PopUpControllers.getLastPopUp);

router.patch('/pop-up', PopUpControllers.updateLastPopUp);

export const PopUpRoutes = router;
