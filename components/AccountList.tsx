import React from "react";
import { AccountType } from "../types/index";
import Link from "next/link";
import { capitalizeFirstLetter } from "../lib/index";
import theme from "../styles/theme";

type Props = {
  accounts: Array<AccountType>;
  id: string;
};

export default function AccountList({ accounts, id }: Props) {
  return (
    <div className="wrapper">
      {accounts &&
        accounts.map((account) => (
          <Link key={account.id} href={`/accounts/${account.id}`}>
            <a className={account.id == id ? "selected" : ""}>
              <div className="balanceWrapper">
                <div>
                  <h3>
                    {capitalizeFirstLetter(
                      account.attributes.accountType.toLowerCase()
                    )}
                  </h3>
                  <p>{account.attributes.displayName}</p>
                </div>
                <p className="balance">${account.attributes.balance.value}</p>
              </div>
            </a>
          </Link>
        ))}

      <style jsx>{`
        .wrapper {
          background: ${theme.colors.white};
          display: flex;
          flex-direction: column;
          flex: 1;
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

        a {
          border-bottom: 0.3px solid ${theme.colors.borderGrey};
          color: inherit;
          padding: 1.5rem;
          text-decoration: none;
          width: 100%;
        }

        .selected {
          background: ${theme.colors.brandOrange};
        }
      `}</style>
    </div>
  );
}
