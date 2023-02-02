import { Layout } from "@/common/components/Layout";
import "@/common/styles/globals.css";
import { theme } from "@/common/themes/Theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
