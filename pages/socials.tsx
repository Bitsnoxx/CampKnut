import PageLayout from 'components/layout/PageLayout';
import { baseUrl, socials } from 'content/links';
import { seo } from 'content/text';
import { OpenGraph } from 'model/opengraph';

export default function SocialsPage() {
  const og: OpenGraph = {
    site_name: seo.title,
    title: 'Socials - ' + seo.title,
    description: "Knut's socials links",
    url: baseUrl + '/socials',
  };
  return (
    <PageLayout openGraph={og}>
      <h1 className="text-2xl mb-4 font-bold">Knut&apos;s socials</h1>
      <div className="grid gap-4 rounded-lg md:grid-cols-3">
        {socials.map((e) => {
          return (
            <a key={e.url} href={e.url} target="_blank" rel="noreferrer">
              <div className="bg-knut-light-bg-info p-4 hover:bg-knut-light-bg dark:bg-knut-dark-bg-info hover:dark:bg-knut-dark-bg">
                <h1 className="text-xl">{e.name}</h1>
                <span className="font-light">
                  {e.url.replace('https://', '').replace('www.', '')}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </PageLayout>
  );
}
