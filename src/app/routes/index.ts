import { Router } from 'express';

import { PortfolioRoutes } from '../modules/portfolio/portfolio.route';
import { FeatureProjectRotues } from '../modules/featureProjects/featureProjects.route';
import { WithnessRoutes } from '../modules/Withness/withness.route';
import { ExploreProjectRoutes } from '../modules/exploreProject/exploreProject.routes';
import { ConnectRoutes } from '../modules/connect/connect.routes';
import { OurStoryRoutes } from '../modules/ourStroy/ourStory.routes';
import { TeamMemberRoutes } from '../modules/team/teamMember.routes';
import { TeamTwoRoutes } from '../modules/teamTwo/teamTwo.route';
import { SeniorTeamRoutes } from '../modules/teamSenior/teamSenior.route';
import { MessageCategoryRoutes } from '../modules/MessageCategory/messageCategory.routes';
import { LifeAtChutiRoutes } from '../modules/lifeAtChuti/lifeAtChuti.routes';
import { MessageRoutes } from '../modules/messages/messages.route';
import { ProjectFullDetailRoute } from '../modules/projectFullDetails/projectFullDetails.route';
import { NewsEventRoute } from '../modules/newsEvents/newsEvents.route';
import { InvestmentDataRoute } from '../modules/investment/investmentData.route';
import { InvestmentTitleRoute } from '../modules/investment/InvestmentTitle/InvestmentTitle.route';
import { InvestmentPhotoRoute } from '../modules/investment/InvestmentPhoto/InvestmentPhoto.route';

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
  {
    path: '/team-two',
    route: TeamTwoRoutes,
  },
  {
    path: '/senior-team',
    route: SeniorTeamRoutes,
  },
  {
    path: '/message-category',
    route: MessageCategoryRoutes,
  },
  {
    path: '/life-at-chuti',
    route: LifeAtChutiRoutes,
  },
  {
    path: '/message',
    route: MessageRoutes,
  },
  {
    path: '/project-details',
    route: ProjectFullDetailRoute,
  },
  {
    path: '/news-events',
    route: NewsEventRoute,
  },
  {
    path: '/investment',
    route: InvestmentDataRoute,
  },
  {
    path: '/investment-photo',
    route: InvestmentPhotoRoute,
  },

  {
    path: '/investment-title',
    route: InvestmentTitleRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
