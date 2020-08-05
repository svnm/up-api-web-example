import { TransactionType } from "../../types/index";

export function groupTransactionsForPieChart(
  transactions: Array<TransactionType>
) {
  let saverAmount = 0;
  let roundUpAmount = 0;
  let interestAmount = 0;
  let totalAmount = 0;

  const data = [
    { label: "Savers", angle: 0, color: 0 },
    { label: "Round up", angle: 0, color: 1 },
    { label: "Interest", angle: 0, color: 2 },
  ];

  transactions.map((transaction) => {
    const description = transaction.attributes.description.toLowerCase();

    const amount = Math.abs(
      transaction.attributes.amount.valueInBaseUnits / 100
    );

    if (description.includes("quick save")) saverAmount += amount;
    if (description.includes("round up")) roundUpAmount += amount;
    if (description.includes("interest")) interestAmount += amount;

    totalAmount += amount;
  });

  data[0].angle = (saverAmount / totalAmount) * 360;
  data[1].angle = (roundUpAmount / totalAmount) * 360;
  data[2].angle = (interestAmount / totalAmount) * 360;

  return data;
}
