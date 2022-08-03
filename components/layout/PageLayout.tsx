import Footer from "../footer/Footer";
import Header from "../header/Header";

type PageLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-knut-light-bg dark:bg-knut-dark-bg">
      <Header />
      <main className="container flex-1 mx-auto max-w-5xl p-4 ">
        {children}
      </main>
      <Footer />
    </div>
  );
}
