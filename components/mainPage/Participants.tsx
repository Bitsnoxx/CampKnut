import CustomLink from 'components/ui/CustomLink';
import { participants } from 'content/streamers';
import { Streamer } from 'model/twitch';

export default function Participants({ twitchData }: { twitchData: Streamer[] }) {
  const categories = [
    {
      title: 'Trainers',
      data: participants.find((e) => e.category === 'trainers')?.members,
    },
    {
      title: 'Judges',
      data: participants.find((e) => e.category === 'judges')?.members,
    },
    {
      title: 'Streamers',
      data: participants.find((e) => e.category === 'streamers')?.members,
    },
    {
      title: 'Guests',
      data: participants.find((e) => e.category === 'guests')?.members,
    },
    {
      title: 'Chefs',
      data: participants.find((e) => e.category === 'chefs')?.members,
    },
  ];

  const isLive = (user_login: string | undefined) => {
    return twitchData.find((s) => s.user_login === user_login)?.type === 'live' || false;
  };

  return (
    <div className="my-10 grid w-full grid-cols-2 gap-4 md:grid-cols-5">
      {categories.map((category) => (
        <div key={category.title}>
          <h1 className="text-2xl mt-4 text-left font-black">{category.title}</h1>
          <ul className="flex flex-col items-start text-left">
            {category?.data?.map((e) => (
              <li key={e.name} className="relative">
                <CustomLink href={e.url} type="a">
                  {e.name}
                </CustomLink>
                {isLive(e?.twitchName) && (
                  <span className="absolute -right-2.5 top-0.5 inline-block h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-red-600 opacity-75"></span>
                    <span className="absolute inline-flex h-2 w-2 rounded-full bg-red-600"></span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
