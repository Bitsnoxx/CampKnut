import "../styles/globals.css";
import type { AppProps } from "next/app";
import PageLayout from "../components/layout/PageLayout";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";

import { components } from "../components/mdxStyling";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session} basePath="/api/auth">
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
        <PageLayout>
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </PageLayout>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
