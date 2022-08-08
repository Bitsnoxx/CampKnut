import { participants } from "content/streamers";
import CustomLink from "components/ui/CustomLink";

export default function Participants() {
  const trainers = participants.find((e) => e.category === "trainers");
  const judges = participants.find((e) => e.category === "judges");
  const streamers = participants.find((e) => e.category === "streamers");
  const guests = participants.find((e) => e.category === "guests");
  const chefs = participants.find((e) => e.category === "chefs");

  return (
    <div className="my-10 grid w-full grid-cols-2 gap-4 md:grid-cols-5">
      <div>
        <h1 className="mt-4 text-2xl font-black md:text-center ">Trainers</h1>
        <ul className="flex flex-col items-start md:items-center">
          {trainers?.members.map((e) => (
            <li key={e.name}>
              <CustomLink href={e.url} type="a">
                {e.name}
              </CustomLink>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="mt-4 text-right text-2xl font-bold md:text-center">
          Judges
        </h1>
        <ul className="flex flex-col items-end md:items-center">
          {judges?.members.map((e) => (
            <li key={e.name}>
              <CustomLink href={e.url} type="a">
                {e.name}
              </CustomLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:order-5">
        <h1 className="mt-4 text-2xl font-bold md:text-center">Guests</h1>
        <ul>
          {guests?.members.map((e) => (
            <li key={e.name} className="md:flex md:flex-col md:items-center">
              <CustomLink href={e.url} type="a">
                {e.name}
              </CustomLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="mt-4 text-right text-2xl font-bold md:text-center">
          Streamers
        </h1>
        <ul className="flex flex-col items-end md:items-center">
          {streamers?.members.map((e) => (
            <li key={e.name}>
              <CustomLink href={e.url} type="a">
                {e.name}
              </CustomLink>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="mt-4 text-2xl font-bold md:text-center">Chefs</h1>
        <ul className="md:flex md:flex-col md:items-center">
          {chefs?.members.map((e) => (
            <li key={e.name}>
              <CustomLink href={e.url} type="a">
                {e.name}
              </CustomLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
