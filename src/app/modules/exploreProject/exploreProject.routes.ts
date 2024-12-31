import { Router } from 'express';
import { ExploreProjectController } from './exploreProject.controller';

const router = Router();

router.post('/explore-project', ExploreProjectController.createExploreProject);

router.get('/explore-project', ExploreProjectController.getAllExploreProject);

router.delete(
  '/explore-project/:projectId',
  ExploreProjectController.deleteSingleExploreProject,
);

export const ExploreProjectRoutes = router;
