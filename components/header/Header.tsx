import Link from "next/link";
import { introduction, seo } from "../../content/text";
import { NextSeo } from "next-seo";

export default function Header() {
  return (
    <header>
      <NextSeo title={introduction.title} description={seo.description} />
      <nav>
        <ul className="flex flex-row justify-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/socials">Socials</Link>
          </li>
          <li>
            <Link href="https://store.streamelements.com/knut" target="_blank">
              Merch
            </Link>
          </li>
        </ul>
      </nav>

      <p className="page-title text-4xl text-center font-bold	mt-10 mb-8">
        {introduction.title} 💪
      </p>
    </header>
  );
}
