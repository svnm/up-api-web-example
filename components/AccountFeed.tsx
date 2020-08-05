import { TransactionType } from "../types/index";
import React, { useEffect, useState } from "react";
import { InfiniteScroll } from "react-simple-infinite-scroll";
import Modal from "./Modal";
import { findMerchant } from "../api/merchants";
import { transaction as transactionApi } from "../api/transaction";
import TransactionReceipt from "./TransactionReceipt";
import theme from "../styles/theme";

type Props = {
  onLoadMore: () => void;
  receiptName: string;
  transactions: Array<TransactionType>;
};

export default function AccountFeed({
  onLoadMore,
  receiptName,
  transactions,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [transactionId, setTransactionId] = useState(null);
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    if (transactionId) {
      transactionApi(transactionId).then(({ data }) => {
        setTransaction(data);
      });
    }
  }, [transactionId]);

  return (
    <div className="wrapper">
      <InfiniteScroll
        throttle={100}
        threshold={300}
        hasMore
        onLoadMore={onLoadMore}
      >
        {transactions.map((transaction) => (
          <div
            className="item"
            key={transaction.id}
            onClick={() => {
              setTransactionId(transaction.id);
              setIsVisible(true);
            }}
          >
            <img
              className="merchant"
              src={`/merchants/${findMerchant(
                transaction.attributes.description
              )}`}
            />
            <div className="itemDetails">
              <p className="description">
                {transaction.attributes.description}
              </p>
              {Math.sign(transaction.attributes.amount.valueInBaseUnits) ===
              1 ? (
                <p className="balance">
                  + ${transaction.attributes.amount.value}
                </p>
              ) : (
                <p>${transaction.attributes.amount.value.replace("-", "")}</p>
              )}
            </div>
          </div>
        ))}
      </InfiniteScroll>
      {transaction && (
        <Modal
          visible={isVisible}
          onClose={() => {
            setIsVisible(false);
          }}
        >
          <TransactionReceipt
            receiptName={receiptName}
            transaction={transaction}
          />
        </Modal>
      )}

      <style jsx>{`
        .merchant {
          height: 4rem;
          margin-right: 2rem;
          width: 4rem;
        }

        .balance {
          color: ${theme.colors.green};
        }

        .description {
          flex: 1;
        }

        .wrapper {
          background: ${theme.colors.white};
          margin-top: 2rem;
          width: 100%;
        }

        .item {
          align-items: center;
          border-bottom: 1px solid ${theme.colors.borderGreyLight};
          cursor: pointer;
          display: flex;
          padding: 0.9rem 2rem 1rem;
          width: 100%;
        }

        .itemDetails {
          display: flex;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
