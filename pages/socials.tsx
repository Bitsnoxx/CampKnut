import PageLayout from "components/layout/PageLayout";
import { socials } from "content/links";

export default function SocialsPage() {
  return (
    <PageLayout>
      <h1 className="mb-4 text-3xl font-bold">Knut&apos;s socials</h1>
      <div className="grid gap-4 rounded-lg md:grid-cols-3">
        {socials.map((e) => {
          return (
            <a key={e.url} href={e.url} target="_blank" rel="noreferrer">
              <div className="bg-knut-light-bg-info p-4 hover:bg-knut-light-bg dark:bg-knut-dark-bg-info hover:dark:bg-knut-dark-bg">
                <h1 className="text-xl">{e.name}</h1>
                <span className="font-light">
                  {e.url.replace("https://", "").replace("www.", "")}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </PageLayout>
  );
}
