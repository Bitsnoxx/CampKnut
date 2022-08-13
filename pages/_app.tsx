import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { components } from 'components/mdxStyling';

import 'styles/globals.css';

import { MDXProvider } from '@mdx-js/react';

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
