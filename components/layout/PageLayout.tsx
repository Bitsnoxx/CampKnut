import clsx from 'clsx';

import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';

type PageLayoutProps = {
  children: JSX.Element | JSX.Element[];
  widthClassName?: string;
};

export default function PageLayout({ children, widthClassName = 'max-w-5xl' }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-knut-light-bg font-inter text-knut-light-text dark:bg-knut-dark-bg dark:text-knut-dark-text">
      <Header />
      <main className={clsx('container mx-auto flex-1 p-4', widthClassName)}>{children}</main>
      <Footer />
    </div>
  );
}
