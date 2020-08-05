export type AccountAttributesType = {
  accountType: string;
  displayName: string;
  balance: BalanceType;
};

export type AccountType = {
  id: string;
  attributes: AccountAttributesType;
};

export type BalanceType = {
  currencyCode: string;
  value: string;
  valueInBaseUnits: number;
};

export type TransactionAttributesType = {
  amount: BalanceType;
  createdAt: string;
  description: string;
  foreignAmount: BalanceType;
  message: string;
  rawText: string;
  settledAt: string;
  status: string;
};

export type TransactionType = {
  id: string;
  attributes: TransactionAttributesType;
};
