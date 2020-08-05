import React from "react";
import { AccountType, TransactionType } from "../types/index";
import Bar from "./charts/Bar";
import Pie from "./charts/Pie";
import { groupTransactionsForPieChart } from "./charts/groupTransactionsForPieChart";
import { groupTransactionsForBarChart } from "./charts/groupTransactionsForBarChart";
import theme from "../styles/theme";

type Props = {
  account: AccountType;
  transactions: Array<TransactionType>;
};

export default function AccountChart({ account, transactions }: Props) {
  const barChartData = groupTransactionsForBarChart(transactions);
  const pieChartData = groupTransactionsForPieChart(transactions);

  return (
    <div className="wrapper">
      {account.attributes.accountType.toLowerCase() === "transactional" && (
        <Bar data={barChartData} />
      )}
      {account.attributes.accountType.toLowerCase() === "saver" && (
        <Pie data={pieChartData} />
      )}
      <style jsx>{`
        .wrapper {
          background: ${theme.colors.white};
          padding: 0 2rem;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
