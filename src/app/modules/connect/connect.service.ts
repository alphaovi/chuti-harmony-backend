import { TConnect } from './connect.interface';
import { ConnectModel } from './connect.model';

const createConnectIntoDB = async (payload: TConnect) => {
  const result = await ConnectModel.create(payload);
  return result;
};

const getLastConnectFromDB = async () => {
  const result = await ConnectModel.findOne().sort({ _id: -1 });
  return result;
};

const updateLastConnectIntoDB = async (payload: Partial<TConnect>) => {
  const lastConnect = await ConnectModel.findOne().sort({ _id: -1 });

  if (!lastConnect) {
    throw new Error('There is no data into the database');
  }

  const result = await ConnectModel.updateOne({_id: lastConnect._id}, payload, {new: true});

  return result;
};

export const ConnectServices = {
  createConnectIntoDB,
  getLastConnectFromDB,
  updateLastConnectIntoDB
};
