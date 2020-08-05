import React from "react";
import Link from "next/link";
import theme from "../styles/theme";

type Props = {
  route: string;
};

export default function Navigation({ route = "" }: Props) {
  return (
    <div className="wrapper">
      <Link href={`/accounts`}>
        <div className={route?.includes("accounts") ? "selected nav" : "nav"}>
          <h3>Accounts</h3>
        </div>
      </Link>

      <Link href={`/transactions`}>
        <div
          className={route?.includes("transactions") ? "selected nav" : "nav"}
        >
          <h3>Transactions</h3>
        </div>
      </Link>

      <style jsx>{`
        .wrapper {
          background: ${theme.colors.charcoal};
          display: flex;
          flex-direction: column;
          flex: 1;
          height: 100vh;
          position: relative;
        }

        .nav {
          color: ${theme.colors.mediumGrey};
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          padding: 2rem;
          text-align: left;
          text-decoration: none;
          width: 100%;
        }

        .selected {
          color: ${theme.colors.brandOrange};
        }
      `}</style>
    </div>
  );
}
