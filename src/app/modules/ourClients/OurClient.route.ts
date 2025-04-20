import { Router } from 'express';
import { OurClientControllers } from './OurClient.controller';

const router = Router();

router.post('/our-clients', OurClientControllers.createOurClients);

router.get('/our-clients', OurClientControllers.getOurClients);

router.delete(
  '/our-clients/:chutiClientId',
  OurClientControllers.deletChutiClient,
);

export const OurClientsRoute = router;
