import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navigation from "../components/Navigation/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <title>AthenaSquare Frontend Assignment</title>
        <meta name="description" content="AthenaSquare Frontend Assignment" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
