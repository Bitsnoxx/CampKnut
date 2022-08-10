import clsx from 'clsx';

import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import {OpenGraph} from "../../model/opengraph";
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
          <meta name="description" content={openGraph?.title} />
          <meta property="og:title" content={openGraph?.title} />
          <meta property="og:type" content={openGraph?.type} />
          <meta property="og:url" content={openGraph?.url} />
          <meta property="og:locale" content={openGraph?.locale} />
          <meta property="og:image:url" content={openGraph?.image?.url} />
          <meta property="og:image:type" content={openGraph?.image?.type} />
          <meta property="og:image:height" content={openGraph?.image?.url} />
          <meta property="og:image:width" content={openGraph?.image?.url} />
          <meta property="og:image:alt" content={openGraph?.image?.url} />
          <meta property="og:description" content={openGraph?.description} />
          <meta property="og:site_name" content={openGraph?.site_name} />
      </Head>
        <div className="flex min-h-screen flex-col bg-knut-light-bg font-inter text-knut-light-text dark:bg-knut-dark-bg dark:text-knut-dark-text">
          <Header />
          <main className={clsx('container mx-auto flex-1 p-4', widthClassName)}>{children}</main>
          <Footer />
        </div>
      </>
  );
}
