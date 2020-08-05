import React from "react";
import { AccountType } from "../types/index";
import { capitalizeFirstLetter } from "../lib/index";
import theme from "../styles/theme";

type Props = {
  account: AccountType;
};

export default function AccountHeader({ account }: Props) {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="balanceWrapper">
          <div>
            <h3>
              {capitalizeFirstLetter(
                account.attributes.accountType.toLowerCase()
              )}
            </h3>
            <p>{account.attributes.displayName}</p>
          </div>
          <div>
            <h3 className="balance">${account.attributes.balance.value}</h3>
            <p className="balance">Available balance</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          background: ${theme.colors.white};
          padding: 0 2rem;
          width: 100%;
        }

        .header {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 2.5rem 0;
          width: 40rem;
        }

        .balanceWrapper {
          display: flex;
          justify-content: space-between;
        }

        .balance {
          color: ${theme.colors.green};
        }

        p {
          color: ${theme.colors.darkGrey};
        }
      `}</style>
    </div>
  );
}
