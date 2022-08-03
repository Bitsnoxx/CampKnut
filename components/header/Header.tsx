import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex flex-row justify-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/socials">Socials</Link>
          </li>
          <li>
            <Link href="/merch">Merch</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
