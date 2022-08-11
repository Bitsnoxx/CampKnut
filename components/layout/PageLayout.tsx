import clsx from 'clsx';

import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import {OpenGraph} from "model/opengraph";
import Head from "next/head";

type PageLayoutProps = {
  children: JSX.Element | JSX.Element[];
  widthClassName?: string;
  openGraph?: OpenGraph;
};

export default function PageLayout({ children, widthClassName = 'max-w-5xl', openGraph }: PageLayoutProps) {
  return (
    <>
      <Head>
        <title> {openGraph?.title}</title>
        <meta name="description" content={openGraph?.description} />
        <meta property="og:title" content={openGraph?.title} />
        <meta property="og:type" content={openGraph?.type} />
        <meta property="og:url" content={openGraph?.url} />
        <meta property="og:locale" content={openGraph?.locale} />
        <meta property="og:image" content={openGraph?.image?.url} />
        <meta property="og:image:type" content={openGraph?.image?.type} />
        <meta property="og:image:height" content={openGraph?.image?.height} />
        <meta property="og:image:width" content={openGraph?.image?.width} />
        <meta property="og:image:alt" content={openGraph?.image?.alt} />
        <meta property="og:description" content={openGraph?.description} />
        <meta property="og:site_name" content={openGraph?.site_name} />

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@Knutspild"/>
        <meta name="twitter:url" content={openGraph?.url}/>
        <meta name="twitter:title" content={openGraph?.title}/>
        <meta name="twitter:description" content={openGraph?.description}/>
        <meta name="twitter:image" content={openGraph?.image?.url}/>
        <meta name="twitter:image:alt" content={openGraph?.image?.alt} />

      </Head>
      <div className="flex min-h-screen flex-col bg-knut-light-bg font-inter text-knut-light-text dark:bg-knut-dark-bg dark:text-knut-dark-text">
        <Header />
        <main className={clsx('container mx-auto flex-1 p-4', widthClassName)}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
