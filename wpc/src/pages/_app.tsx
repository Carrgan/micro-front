import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  console.log(router.pathname);
  return <div>Hi</div>
  // return <Component {...pageProps} />;
}
