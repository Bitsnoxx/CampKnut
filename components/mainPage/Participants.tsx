import { participants } from "../../content/streamers";
import CustomLink from "../ui/CustomLink";

export default function Participants() {
  const trainers = participants.find((e) => e.category === "trainers");
  const judges = participants.find((e) => e.category === "judges");
  const streamers = participants.find((e) => e.category === "streamers");
  const guests = participants.find((e) => e.category === "guests");
  const chefs = participants.find((e) => e.category === "chefs");

  return (
    <div className="grid grid-cols-2 gap-16 my-10 w-full">
      <div>
        <div>
          <h1 className="text-2xl font-bold mt-4">Trainers</h1>
          <ul>
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
          <h1 className="text-2xl font-bold mt-4">Judges</h1>
          <ul>
            {judges?.members.map((e) => (
              <li key={e.name}>
                <CustomLink href={e.url} type="a">
                  {e.name}
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-2xl font-bold mt-4">Guests</h1>
          <ul>
            {guests?.members.map((e) => (
              <li key={e.name}>
                <CustomLink href={e.url} type="a">
                  {e.name}
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div>
          <h1 className="text-2xl font-bold mt-4">Streamers</h1>
          <ul className="items-end flex flex-col">
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
          <h1 className="text-2xl font-bold mt-4">Chefs</h1>
          <ul>
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
    </div>
  );
}
