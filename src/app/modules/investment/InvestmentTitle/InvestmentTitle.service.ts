import { TInvestmentTitle } from './InvestmentTitle.interface';
import { InvestmentTitleModel } from './InvestmentTitle.model';

const createInvestmentTitleIntoDB = async (payload: TInvestmentTitle) => {
  const result = InvestmentTitleModel.create(payload);
  return result;
};

const getInvestmentTitleFromDB = async () => {
  const result = InvestmentTitleModel.findOne().sort({ _id: -1 });
  return result;
};

const updateInvestmentTitleIntoDB = async (
  payload: Partial<TInvestmentTitle>,
) => {
  const lastInvestmentTitleId = await InvestmentTitleModel.findOne().sort({
    _id: -1,
  });

  if (!lastInvestmentTitleId) {
    throw new Error('There is no data into the database');
  }

  const result = await InvestmentTitleModel.updateOne(
    { _id: lastInvestmentTitleId._id },
    payload,
    { new: true },
  );

  return result;
};

export const InvestmentTitleServices = {
  createInvestmentTitleIntoDB,
  getInvestmentTitleFromDB,
  updateInvestmentTitleIntoDB
};
