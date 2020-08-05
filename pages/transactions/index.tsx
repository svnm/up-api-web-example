import { TransactionType } from "../../types/index";
import React, { useEffect, useState } from "react";
import { transactions as transactionsApi } from "../../api/transactions";
import AccountFeed from "../../components/AccountFeed";

export default function Transactions() {
  const [transactions, setTransactions] = useState<Array<TransactionType>>([]);
  const [nextUrl, setNextUrl] = useState<string>("");

  useEffect(() => {
    loadInitialTransactions();
  }, []);

  function loadInitialTransactions() {
    transactionsApi().then(({ data, links }) => {
      setTransactions(data);
      setNextUrl(links.next);
    });
  }

  function handleLoadMore() {
    transactionsApi(nextUrl).then(({ data, links }) => {
      setTransactions([...transactions, ...data]);
      setNextUrl(links.next);
    });
  }

  return (
    <AccountFeed
      onLoadMore={handleLoadMore}
      receiptName="Payment Receipt"
      transactions={transactions}
    />
  );
}
