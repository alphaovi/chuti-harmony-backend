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

router.delete(
  '/project-details/:projectId',
  ProjectFullDetailControllers.deleteSingleProjectAllDetails,
);

export const ProjectFullDetailRoute = router;
