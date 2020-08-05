import { TransactionType } from "../../types/index";

// @ts-ignore
const merchants: Array<string> = process.env.merchants || [];

export function groupTransactionsForBarChart(
  transactions: Array<TransactionType>
) {
  const data = [];

  merchants.map((merchant, i) => {
    data.push({ x: merchant, y: 0, color: i });
  });

  transactions.map((transaction) => {
    const merchantDescription = transaction.attributes.description.toLowerCase();

    data.map((d) => {
      // e.g. { x: "coles", y: 0, color: 0 } increment the y amount
      if (d.x.toLowerCase().includes(merchantDescription)) {
        d.y += Math.round(
          Math.abs(transaction.attributes.amount.valueInBaseUnits) / 100
        );
      }
    });
  });

  return data;
}
