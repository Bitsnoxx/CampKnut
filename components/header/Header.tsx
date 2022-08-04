import Link from "next/link";
import { introduction } from "../../content/text";

export default function Header() {
  return (
    <header>
      <title>{introduction.title}</title>
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

      <p className="page-title text-2xl text-center font-bold	my-12">
        {introduction.title} 💪
      </p>
    </header>
  );
}
