import { AccountType, TransactionType } from "../../types/index";
import React, { useEffect, useState } from "react";
import AccountHeader from "../../components/AccountHeader";
import { transactions as transactionsApi } from "../../api/transactions";
import AccountFeed from "../../components/AccountFeed";
import AccountChart from "../../components/AccountChart";

type Props = {
  account: AccountType;
  id: string;
};

export default function Account({ account, id }: Props) {
  const [transactions, setTransactions] = useState<Array<TransactionType>>([]);
  const [nextUrl, setNextUrl] = useState<string>("");

  useEffect(() => {
    if (id) {
      loadInitialAccountTransactions();
    }
  }, [id]);

  function loadInitialAccountTransactions() {
    transactionsApi(
      `https://api.up.com.au/api/v1/accounts/${id}/transactions`
    ).then(({ data, links }) => {
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

  return account ? (
    <>
      <AccountHeader account={account} />
      <AccountChart account={account} transactions={transactions} />
      <AccountFeed
        onLoadMore={handleLoadMore}
        receiptName={account.attributes.displayName}
        transactions={transactions}
      />
    </>
  ) : null;
}
