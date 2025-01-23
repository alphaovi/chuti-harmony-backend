import { Router } from 'express';
import { MessageControllers } from './messages.controller';

const router = Router();

// create message
router.post('/message', MessageControllers.createMessage);

// get all messages
router.get('/message', MessageControllers.getAllMessage);

// delete single message
router.delete('/message/:messageId', MessageControllers.deleteSingelMessage);

export const MessageRoutes = router;
