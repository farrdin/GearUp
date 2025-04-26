import { IUser } from "./user.interface";

type Transaction = {
  id: string;
  transactionStatus: string;
};

type Bicycles = {
  bicycle: string;
  name: string;
  quantity: number;
  brand: string;
  _id: string;
};

export type IOrder = {
  bicycles: Bicycles[];
  createdAt: string;
  deliveryType: string;
  status: string;
  totalPrice: number;
  transaction: Transaction;
  updatedAt: string;
  user: IUser;
  _id: string;
};
