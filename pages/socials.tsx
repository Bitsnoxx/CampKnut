import { socials } from "./../content/links";

export default function SocialsPage() {
  return (
    <>
      <h1 className="text-3xl mb-4 font-bold">Knut&apos;s socials</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {socials.map((e) => {
          return (
            <a key={e.url} href={e.url} target="_blank" rel="noreferrer">
              <div className="p-4 bg-knut-light-bg-info dark:bg-knut-dark-bg-info">
                <h1 className="text-xl">{e.name}</h1>
                <span className="font-light">
                  {e.url.replace("https://", "").replace("www.", "")}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}
