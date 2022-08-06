import clsx from "clsx";

import Footer from "../footer/Footer";
import Header from "../header/Header";

type PageLayoutProps = {
  children: JSX.Element | JSX.Element[];
  widthClassName?: string;
};

export default function PageLayout({
  children,
  widthClassName = "max-w-5xl",
}: PageLayoutProps) {
  return (
    <div className="font-inter flex flex-col min-h-screen text-knut-light-text dark:text-knut-dark-text bg-knut-light-bg dark:bg-knut-dark-bg">
      <Header />
      <main className={clsx("container flex-1 mx-auto p-4", widthClassName)}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
