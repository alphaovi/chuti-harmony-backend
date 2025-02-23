import { Router } from 'express';
import { OurBusinessPhotosControllers } from './ourBusinessPhotos.controller';

const router = Router();

router.post(
  '/our-business-photos',
  OurBusinessPhotosControllers.createOurBusinessPhotos,
);
router.get(
  '/our-business-photos',
  OurBusinessPhotosControllers.getAllOurBusinessPhotos,
);
router.delete(
  '/our-business-photos/:ourBusinessPhotoId',
  OurBusinessPhotosControllers.deleteSingleOurBusinessPhotos,
);

export const OurBusinessPhotosRoute = router;
