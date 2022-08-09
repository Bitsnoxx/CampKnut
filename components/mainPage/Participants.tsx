import { participants } from 'content/streamers';
import CustomLink from 'components/ui/CustomLink';

export default function Participants() {
  const trainers = participants.find((e) => e.category === 'trainers');
  const judges = participants.find((e) => e.category === 'judges');
  const streamers = participants.find((e) => e.category === 'streamers');
  const guests = participants.find((e) => e.category === 'guests');
  const chefs = participants.find((e) => e.category === 'chefs');

  const isLive = false;

  return (
    <div className="my-10 grid w-full grid-cols-2 gap-4 md:grid-cols-5">
      <div>
        <h1 className="text-2xl mt-4 text-left font-black">Trainers</h1>
        <ul className="flex flex-col items-start text-left  ">
          {trainers?.members.map((e) => (
            <li key={e.name}>
              <CustomLink href={e.url} type="a">
                {e.name}
              </CustomLink>
              {isLive && (
                <div className="ml-1 inline-flex max-w-xs rounded-lg border-solid border-black bg-knut-other-live py-1 px-1.5 text-center text-smol font-bold">
                  LIVE
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="text-2xl mt-4 text-left font-black">Judges</h1>
        <ul className="flex flex-col items-start text-left  ">
          {judges?.members.map((e) => (
            <li key={e.name}>
              <CustomLink href={e.url} type="a">
                {e.name}
              </CustomLink>
              {isLive && (
                <div className="ml-1 inline-flex max-w-xs rounded-lg border-solid border-black bg-knut-other-live py-1 px-1.5 text-center text-smol font-bold">
                  LIVE
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:order-5">
        <h1 className="text-2xl mt-4 text-left font-black">Guests</h1>
        <ul className="flex flex-col items-start text-left  ">
          {guests?.members.map((e) => (
            <li key={e.name}>
              <CustomLink href={e.url} type="a">
                {e.name}
              </CustomLink>
              {isLive && (
                <div className="ml-1 inline-flex max-w-xs rounded-lg border-solid border-black bg-knut-other-live py-1 px-1.5 text-center text-smol font-bold">
                  LIVE
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="text-2xl mt-4 text-left font-black">Streamers</h1>
        <ul className="flex flex-col items-start text-left  ">
          {streamers?.members.map((e) => (
            <li key={e.name}>
              <CustomLink href={e.url} type="a">
                {e.name}
              </CustomLink>
              {isLive && (
                <div className="ml-1 inline-flex max-w-xs rounded-lg border-solid border-black bg-knut-other-live py-1 px-1.5 text-center text-smol font-bold">
                  LIVE
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-2xl mt-4 text-left font-black">Chefs</h1>
        <ul className="flex flex-col items-start text-left  ">
          {chefs?.members.map((e) => (
            <li key={e.name}>
              <CustomLink href={e.url} type="a">
                {e.name}
              </CustomLink>
              {isLive && (
                <div className="ml-1 inline-flex max-w-xs rounded-lg border-solid border-black bg-knut-other-live py-1 px-1.5 text-center text-smol font-bold">
                  LIVE
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
