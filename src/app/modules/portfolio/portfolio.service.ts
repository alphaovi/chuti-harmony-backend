import { TPortfolio } from './portfolio.interface';
import { PortfolioModel } from './portfolio.model';

const createPortfolioIntoDB = async (payload: TPortfolio) => {
  const result = await PortfolioModel.create(payload);
  return result;
};

const getPortfolioFromDB = async () => {
  const result = await PortfolioModel.find();
  return result;
};

const updatePortfolioIntoDB = async (payload: Partial<TPortfolio>) => {
  const lastPortfolio = await PortfolioModel.findOne().sort({ _id: -1 });

  if (!lastPortfolio) {
    throw new Error('There is no data into the database');
  }

  const result = await PortfolioModel.updateOne(
    { _id: lastPortfolio?._id },
    payload,
    { new: true },
  );

  return result;
};

export const PortfolioServices = {
  createPortfolioIntoDB,
  getPortfolioFromDB,
  updatePortfolioIntoDB,
};
