import { Router } from 'express';
import { ProjectFullDetailControllers } from './projectFullDetails.controller';

const router = Router();

router.post(
  '/project-details',
  ProjectFullDetailControllers.createProjectAllDetails,
);

router.get(
  '/project-details',
  ProjectFullDetailControllers.getProjectAllDetails,
);

router.get(
  '/project-details/:projectId',
  ProjectFullDetailControllers.getSingleProjectAllDetails,
);

export const ProjectFullDetailRoute = router;
