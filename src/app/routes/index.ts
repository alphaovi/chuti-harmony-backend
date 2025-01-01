import { Router } from 'express';

import { PortfolioRoutes } from '../modules/portfolio/portfolio.route';
import { FeatureProjectRotues } from '../modules/featureProjects/featureProjects.route';
import { WithnessRoutes } from '../modules/Withness/withness.route';
import { ExploreProjectRoutes } from '../modules/exploreProject/exploreProject.routes';
import { ConnectRoutes } from '../modules/connect/connect.routes';
import { OurStoryRoutes } from '../modules/ourStroy/ourStory.routes';
import { TeamMemberRoutes } from '../modules/team/teamMember.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/portfolio',
    route: PortfolioRoutes,
  },
  {
    path: '/feature-project',
    route: FeatureProjectRotues,
  },
  {
    path: '/withness',
    route: WithnessRoutes,
  },
  {
    path: '/explore-project',
    route: ExploreProjectRoutes,
  },
  {
    path: '/connect',
    route: ConnectRoutes,
  },
  {
    path: '/our-story',
    route: OurStoryRoutes,
  },

  {
    path: '/team-member',
    route: TeamMemberRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
