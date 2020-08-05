import React from "react";
import AccountHeader from "./AccountHeader";

export default { title: "Components/AccountHeader" };

export const accountHeader = () => (
  <AccountHeader
    account={{
      id: "123abc",
      attributes: {
        accountType: "TRANSACTIONAL",
        displayName: "Up Account",
        balance: {
          currencyCode: "AUD",
          value: "10.00",
          valueInBaseUnits: 1000,
        },
      },
    }}
  />
);
