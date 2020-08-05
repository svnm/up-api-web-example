import { AccountType } from "../types/index";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import "../styles/vendor/react-vis.css";
import "../styles/vendor/rodal.css";
import Head from "next/head";
import AccountList from "../components/AccountList";
import { accounts as accountsApi } from "../api/accounts";
import { useRouter } from "next/router";
import Navigation from "../components/Navigation";
import { AppProps } from "next/app";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const [account, setAccount] = useState<AccountType>(null);
  const [accounts, setAccounts] = useState<Array<AccountType>>();
  const router = useRouter();
  // @ts-ignore
  const { id } = router.query || "";

  useEffect(() => {
    accountsApi().then(({ data }) => {
      setAccounts(data);
    });
  }, []);

  useEffect(() => {
    if (accounts) {
      setAccount(accounts.find((account) => account.id === id));
    }
  }, [accounts]);

  return (
    <>
      <Head>
        <title>Up API web example</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Karla"
        />
      </Head>

      <main>
        <div className="col1">
          <Navigation route={router.route} />
          <AccountList accounts={accounts} id={id} />
        </div>
        <div className="col2">
          <Component
            {...pageProps}
            accounts={accounts}
            account={account}
            id={id}
          />
        </div>
      </main>

      <style jsx>{`
        main {
          background-color: ${theme.colors.background};
        }

        .col1 {
          display: flex;
          flex-direction: row;
          left: 0;
          padding-right: 2rem;
          position: fixed;
          top: 0;
          width: 45%;
        }

        .col2 {
          margin-left: 45%;
          margin-top: 2rem;
          overflow: auto;
          width: 55%;
        }
      `}</style>
    </>
  );
}
