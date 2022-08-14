import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  const analyticsSecret = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  return (
    <Html lang="en">
      <Head className="dark" style={{ colorScheme: 'dark' }}>
        <link rel="apple-touch-icon" sizes="180x180" href="/knut3head.webp"></link>

        <meta name="theme-color" content="#121212" />
        {analyticsSecret && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${analyticsSecret}`} />
            <script
              async
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analyticsSecret}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
