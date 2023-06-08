import React, { useEffect, useState } from "react";
import Head from 'next/head';
import '../styles/global.css';

export default function App({Component, pageProps, children}) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Comic Closet"
        />
      </Head>
      <main className="container">{children}
          <Component {...pageProps} />
      </main>
    </div>
  );
}

