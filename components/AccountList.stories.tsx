import React from "react";
import AccountList from "./AccountList";

export default { title: "Components/AccountList" };

export const accountList = () => (
  <AccountList
    id="123abc"
    accounts={[
      {
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
      },
    ]}
  />
);
