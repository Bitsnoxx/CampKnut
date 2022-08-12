import PageLayout from 'components/layout/PageLayout';
import Important from 'components/ui/Important';
import { contributors } from 'content/contributors';
import { OpenGraph } from 'model/opengraph';
import { seo } from 'content/text';
import { baseUrl } from 'content/links';

const developers = contributors.find((e) => e.category === 'Stallions')?.members;
const graphics = contributors.find((e) => e.category === 'Graphics')?.members;
const fixers = contributors.find((e) => e.category === 'Fixes')?.members;

const Contributors = () => {
  const og: OpenGraph = {
    site_name: seo.title,
    title: 'Contributors - ' + seo.title,
    description: 'Contributors who made this website possible',
    url: baseUrl + '/contributors',
  };

  return (
    <>
      <PageLayout openGraph={og}>
        <h1 className="text-3xl mb-4 text-center font-bold">Contributors 🥇</h1>
        <div className="flex justify-center">
          <div className="p-4">
            <h1 className="py-5 text-center">Stallions</h1>
            <table className="w-96">
              <thead>
                <tr>
                  <th className="p-2 text-left">Username</th>
                  <th className="p-2 text-left">Topic</th>
                </tr>
              </thead>{' '}
              <tbody>
                {developers?.map((developers, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? 'bg-knut-light-bg-info dark:bg-knut-dark-bg-info' : ''
                    }
                  >
                    <td className="p-2">{developers.username}</td>
                    <td className="p-2">{developers.help}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h1 className="py-10 text-center">Graphics</h1>
            <table className="w-96">
              <thead>
                <tr>
                  <th className="p-2 text-left">Username</th>
                  <th className="p-2 text-left">Topic</th>
                </tr>
              </thead>{' '}
              <tbody>
                {graphics?.map((developers, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? 'bg-knut-light-bg-info dark:bg-knut-dark-bg-info' : ''
                    }
                  >
                    <td className="p-2">{developers.username}</td>
                    <td className="p-2">{developers.help}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h1 className="py-10 text-center">Fixes</h1>
            <table className="w-96">
              <thead>
                <tr>
                  <th className="p-2 text-left">Username</th>
                  <th className="p-2 text-left">Topic</th>
                </tr>
              </thead>{' '}
              <tbody>
                {fixers?.map((developers, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? 'bg-knut-light-bg-info dark:bg-knut-dark-bg-info' : ''
                    }
                  >
                    <td className="p-2">{developers.username}</td>
                    <td className="p-2">{developers.help}</td>
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
