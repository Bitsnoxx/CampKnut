import PageLayout from 'components/layout/PageLayout';
import Important from 'components/ui/Important';
import { contributors } from 'content/contributors';
import { OpenGraph } from "model/opengraph";
import { SEO } from "content/text";
import { baseUrl } from "content/links";

const Contributors = () => {
  let og:OpenGraph = {
    site_name: seo.title,
    title: "Contributors - " + seo.title,
    description: "Contributors who made this website possible",
    url: baseUrl + "/contributors",
  }
  return (
    <>
      <PageLayout openGraph={og}>
        <h1 className="text-3xl mb-4 text-center font-bold">Contributors 🥇</h1>
        <div className="flex justify-center">
          <div className="p-4">
            <table className="w-96">
              <thead>
                <tr>
                  <th className="p-2 text-left">Username</th>
                  <th className="p-2 text-left">Help</th>
                </tr>
              </thead>
              <tbody>
                {contributors.map((contributor, index) => (
                  <tr
                    key={`halloffame-${contributor.username}`}
                    className={
                      index % 2 === 0 ? 'bg-knut-light-bg-info dark:bg-knut-dark-bg-info' : ''
                    }
                  >
                    <td className="p-2">{contributor.username}</td>
                    <td className="p-2">{contributor.help}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Important>
          <div className="text-center">Should your name be here? </div>
          <div className="text-center">
            Contact
            <strong> Bitsnoxx#1337</strong> on Discord.
          </div>
        </Important>
      </PageLayout>
    </>
  );
};

export default Contributors;
