/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import 'nprogress/nprogress.css';

import '../styles/globals.css';

const Nprogress: any = dynamic(
  () => {
    return import('~/components/nprogress');
  },
  { ssr: false }
);

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const AnyComponent = Component as any;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Putri & Jodie</title>
        <meta name="description" content="The Wedding of Putri & Jodie" />
        <meta property="og:title" content="Putri & Jodie" />
        <meta property="og:description" content="The Wedding of Putri & Jodie" />
        <meta property="og:image" content="/meta-image.jpg" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nprogress />
      <AnyComponent {...pageProps} />
    </>
  );
}
