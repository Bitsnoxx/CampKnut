import Tina from "../.tina/components/TinaDynamicProvider.js";
import "../styles/globals.css";
import { ScriptProps } from "next/script";
import { AppProps } from "next/app.js";
import PageLayout from "../components/layout/PageLayout";
import { MDXProvider } from "@mdx-js/react";

import { components } from "../components/mdxStyling";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <PageLayout>
      <MDXProvider components={components}>
        <Tina>
          <Component {...pageProps} />
        </Tina>
      </MDXProvider>
    </PageLayout>
  );
};

export default App;
