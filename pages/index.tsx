import type { NextPage } from "next";
import Image from "next/image";
import { Container } from "@mantine/core";
import { introduction, tips } from "../content/text";
import Link from "next/link";
import CustomLink from "../components/ui/CustomLink";
import { participants } from "../content/streamers";
import Important from "../components/ui/Important";

const Home: NextPage = () => {
  const trainers = participants.find((e) => e.category === "trainers");
  const judges = participants.find((e) => e.category === "judges");
  const streamers = participants.find((e) => e.category === "streamers");
  const guests = participants.find((e) => e.category === "guests");
  const chefs = participants.find((e) => e.category === "chefs");

  return (
    <Container size="md" px="md">
      <article className="page sans">
        <div className="page-body">
          <Image
            src="/CampKnut.webp"
            alt="Camp Knut"
            width={2560}
            height={1450}
            priority={true}
            decoding="async"
            className="aspect-auto"
          />
          <section className="mb-10 mt-5">
            <h1 className="text-2xl font-bold light:text-knut-light-header dark:text-knut-dark-header">
              What is {introduction.title}?
            </h1>
            <section>
              <h3>{introduction.whatIs}</h3>
            </section>
            <div className="my-10">
              <h2 className="mt-8 text-2xl font-bold light:text-knut-light-header dark:text-knut-dark-header">
                Goal 🏆
              </h2>
              <h1>{introduction.goal}</h1>
            </div>
            <div className="my-10">
              <h2 className="mt-8 text-2xl font-bold light:text-knut-light-header dark:text-knut-dark-header">
                Who is Knut?
              </h2>
              <h1>{introduction.whoIsKnut}</h1>
            </div>
          </section>

          <div className="flex my-10">
            <div className="w-1/2">
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
            <div className="w-1/2">
              <div>
                <h1 className="text-2xl font-bold mt-4">Streamers</h1>
                <ul>
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

          <Important>
            <p>💡 {tips.knowYourLimits}</p>
          </Important>

          <Important>
            <p>💡 {tips.supplements}</p>
          </Important>

          <div className="flex">
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mt-4 light:text-knut-light-header dark:text-knut-dark-header mb-2">
                🥩 Meal Plans
              </h1>
              <p className="knut-dark-text knut-light-text hover:font-black">
                {" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/1Fto6sArnx-lBoxXyFEC3cLCbVQkJdwT9-JsPD9Agra8/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  OTK Meal plans
                </a>
              </p>
              <p className="knut-dark-text knut-light-text hover:font-black">
                {" "}
                <a href="https://bit.ly/3vil5en">
                  Mizkif meal plan with supplements
                </a>
              </p>
              <p className="knut-dark-text knut-light-text hover:font-black">
                {" "}
                <a href="https://bit.ly/3cReLVb">
                  Mizkif meal plan without eggs and supplements
                </a>
              </p>
            </div>

            <div className="w-1/2">
              <h1 className="text-2xl font-bold mt-4 light:text-knut-light-header dark:text-knut-dark-header">
                💖 Community
              </h1>
              <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-bold">
                <a href="">
                  Amazon Supplements by <strong>WakeWilder</strong>
                </a>
              </figure>
              <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-bold">
                <a href="">
                  Stream workout log - Maintained by <strong>DrStone</strong>
                </a>
              </figure>
              <p className="knut-dark-text knut-light-text hover:font-black">
                📀{" "}
                <a
                  href="https://open.spotify.com/playlist/0bNUdcAFj5Un6XNKZ5Xora?si=e5e3832466244996"
                  target="_blank"
                  rel="noreferrer"
                >
                  Camp Knut Gym Playlist - Maintained by{" "}
                </a>
                <a
                  href="https://open.spotify.com/playlist/0bNUdcAFj5Un6XNKZ5Xora?si=e5e3832466244996"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>Tahtooz</strong>
                </a>
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mt-4 light:text-knut-light-header dark:text-knut-dark-header mb-2">
                📕 Plans
              </h1>
              <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-bold">
                <a href="">Workout Beginner</a>
              </figure>
              <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-bold">
                <a href="">Workout plan Week 1</a>
              </figure>
              <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-bold">
                <a href="">Workout plan Week 2</a>
              </figure>
              <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-bold">
                <Link href="/exercises">
                  <a>Exercises</a>
                </Link>
              </figure>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mt-4 light:text-knut-light-header dark:text-knut-dark-header mb-2">
                🛠️ Tools
              </h1>
              <p className="light:text-knut-light-header dark:text-knut-dark-header hover:font-bold">
                MyFitnessPal{" "}
                <a
                  href="https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718"
                  target="_blank"
                  rel="noreferrer"
                  className="light:text-knut-light-header dark:text-knut-dark-header hover:font-bold"
                >
                  iOS{" "}
                </a>
                /{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.myfitnesspal.android&amp;hl=en&amp;gl=US"
                  target="_blank"
                  rel="noreferrer"
                  className="light:text-knut-light-header dark:text-knut-dark-header hover:font-bold"
                >
                  Android
                </a>
              </p>
              <p className="knut-dark-text knut-light-text hover:font-black">
                {" "}
                <a
                  href="https://www.bodybuilding.com/fun/bmr_calculator.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  BMR Calculator
                </a>
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mt-4 light:text-knut-light-header dark:text-knut-dark-header mb-2">
                📈 Progress
              </h1>
              <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-bold">
                <a href="">
                  <h1> Camp Knut - Calendar</h1>
                </a>
              </figure>

              <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-bold">
                <a href="">Weekly results</a>
              </figure>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mt-4 light:text-knut-light-header dark:text-knut-dark-header mb-2">
                📃 Articles
              </h1>
              <p className="knut-dark-text knut-light-text hover:font-black">
                {" "}
                <a href="https://physiqonomics.com/fat-loss/">
                  The Best Fat Loss Article on the Motherfuckin’ Internet
                </a>
              </p>
            </div>
          </div>

          <div className="text-center my-20">
            <h3 className="text-xl font-bold mt-4">Want to help out?</h3>
            <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-bold">
              <a href="https://github.com/Bitsnoxx/CampKnut/issues">
                <h1>Roadmap</h1>
              </a>
            </figure>
          </div>

          <figure className="block-color-gray_background callout mt-8">
            <div className="text-center">
              If you have questions about training - Post them in #camp-knut in
              the{" "}
              <p className="light:text-knut-light-header dark:text-knut-dark-header hover:font-bold">
                <a
                  href="http://discord.gg/knut"
                  target="_blank"
                  rel="noreferrer"
                >
                  Discord
                </a>
              </p>
            </div>
            <div className="text-center">
              Feedback, issues or questions? Contact{" "}
              <strong>Bitsnoxx#1337</strong> on Discord.
            </div>
          </figure>
        </div>
      </article>
    </Container>
  );
};

export default Home;
