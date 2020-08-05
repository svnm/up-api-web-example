import React from "react";
import AccountFeed from "./AccountFeed";

export default { title: "Components/AccountFeed" };

const transactions = [
  {
    id: "123abcd",
    type: "transactions",
    attributes: {
      amount: {
        currencyCode: "AUD",
        value: "10.00",
        valueInBaseUnits: 1000,
      },
      createdAt: "2020-01-01T11:11:11+10:00",
      description: "Round Up",
      foreignAmount: {
        currencyCode: "AUD",
        value: "20.00",
        valueInBaseUnits: 2000,
      },
      message: "",
      rawText: "",
      settledAt: "2020-01-01T11:11:11+10:00",
      status: "SETTLED",
    },
  },
  {
    id: "123abce",
    type: "transactions",
    attributes: {
      amount: {
        currencyCode: "AUD",
        value: "20.00",
        valueInBaseUnits: 2000,
      },
      createdAt: "2020-01-02T11:11:11+10:00",
      description: "Nando's",
      foreignAmount: {
        currencyCode: "AUD",
        value: "20.00",
        valueInBaseUnits: 2000,
      },
      message: "",
      rawText: "NANDOS, SOUTH MELB",
      settledAt: "2020-01-02T11:11:11+10:00",
      status: "SETTLED",
    },
  },
];

export const accountFeed = () => (
  <AccountFeed
    onLoadMore={() => {}}
    receiptName="Payment receipt"
    transactions={transactions}
  />
);
