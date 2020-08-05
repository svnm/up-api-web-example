import { TransactionType } from "../types/index";
import { findMerchant } from "../api/merchants";
import moment from "moment";
import theme from "../styles/theme";

type Props = {
  receiptName: string;
  transaction: TransactionType;
};

export default function TransactionReceipt({
  receiptName,
  transaction,
}: Props) {
  return (
    <div className="receipt">
      <div className="header">
        <p>
          <img
            className="merchant"
            src={`/merchants/${findMerchant(
              transaction.attributes.description
            )}`}
          />

          {transaction.attributes.description}
        </p>

        {Math.sign(transaction.attributes.amount.valueInBaseUnits) === 1 ? (
          <p className="balance">+ ${transaction.attributes.amount.value}</p>
        ) : (
          <p>${transaction.attributes.amount.value.replace("-", "")}</p>
        )}
      </div>

      <div className="wrapper">
        <p>
          <DescriptionIcon /> Description:
        </p>
        <p>{transaction.attributes.description}</p>
      </div>

      <div className="wrapper">
        <p>
          <DateIcon /> Payment Date:
        </p>
        <p>
          {moment(transaction.attributes.settledAt).format(
            "D MMM YYYY [at] h:mma"
          )}
        </p>
      </div>

      <div className="wrapper borderEnd">
        <p>
          <DescriptionIcon /> Status:
        </p>
        <p>{transaction.attributes.status}</p>
      </div>

      <div className="accountFrom">
        <p>
          {Math.sign(transaction.attributes.amount.valueInBaseUnits) === 1
            ? "PAID TO"
            : "PAID FROM"}
        </p>

        <div className="accountName">
          <img className="merchant" src={"/merchants/up.jpg"} />
          <p>{receiptName}</p>
        </div>
      </div>

      <style jsx>{`
        .receipt {
          background: ${theme.colors.lighterGrey};
        }

        .header,
        .wrapper {
          display: flex;
          justify-content: space-between;
          padding: 0.7rem 1.4rem;
        }

        .wrapper {
          border-top: 1px solid ${theme.colors.lightGrey};
          padding: 1.2rem 2rem;
        }

        .header {
          background: ${theme.colors.white};
          padding: 3rem 2rem;
        }

        .borderEnd {
          border-bottom: 1px solid ${theme.colors.lightGrey};
        }

        .header p {
          align-items: center;
          display: flex;
        }

        .merchant {
          height: 4rem;
          margin-right: 2rem;
          width: 4rem;
        }

        p {
          color: ${theme.colors.darkGrey};
        }

        .balance {
          color: ${theme.colors.green};
        }

        .accountFrom {
          background: ${theme.colors.white};
          padding-top: 2rem;
          padding-left: 2rem;
        }

        .accountName {
          align-items: center;
          display: flex;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
}

const DescriptionIcon = () => (
  <svg
    style={{
      verticalAlign: "middle",
      marginRight: "1.4rem",
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    width="18px"
    height="18px"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
  </svg>
);

const DateIcon = () => (
  <svg
    style={{
      verticalAlign: "middle",
      marginRight: "1.4rem",
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    width="18px"
    height="18px"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z" />
  </svg>
);
