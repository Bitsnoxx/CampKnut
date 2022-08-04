import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container } from "@mantine/core";
import { introduction, tips } from "../content/text";
import { MdContactSupport } from "react-icons/md";
import Link from "next/link";
/* import { participants } from "../content/streamers"; */

const Home: NextPage = () => {
  return (
    <Container size="md" px="md">
      <article className="page sans">
        <div className="page-body">
          <Image
            src="/CampKnut.webp"
            alt="Camp Knut"
            width={2560}
            height={1250}
            priority={true}
            decoding="async"
          />
          <section className="mb-10 mt-5">
            <h1 className="text-2xl font-bold">
              What is {introduction.title}?
            </h1>
            <h3>{introduction.whatIs}</h3>
            <div className="my-10">
              <h2 className="mt-8 text-2xl font-bold">Goal🏆</h2>
              <h1>{introduction.goal}</h1>
            </div>
            <div className="my-10">
              <h2 className="mt-8 text-2xl font-bold">Who is Knut?</h2>
              <h1>{introduction.whoIsKnut}</h1>
            </div>
          </section>

          <div className="flex my-10">
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mt-4">Trainers</h1>
              <p className="underline underline-offset-4">
                <a
                  href="https://twitch.tv/knut"
                  target="_blank"
                  rel="noreferrer"
                >
                  Knut
                </a>
              </p>
              <p className="underline underline-offset-4">
                <a
                  href="https://www.twitch.tv/wakewilder"
                  target="_blank"
                  rel="noreferrer"
                >
                  WakeWilder
                </a>
              </p>
              <h1 className="text-2xl font-bold mt-4">Judges</h1>
              <p className="underline underline-offset-4">
                <a
                  href="https://twitch.tv/knut"
                  target="_blank"
                  rel="noreferrer"
                >
                  Knut
                </a>
              </p>
              <p className="underline underline-offset-4">
                <a
                  href="https://www.twitch.tv/asmongold"
                  target="_blank"
                  rel="noreferrer"
                >
                  Asmongold
                </a>
              </p>
              <p className="underline underline-offset-4">
                <a
                  href="https://www.twitch.tv/wakewilder"
                  target="_blank"
                  rel="noreferrer"
                >
                  WakeWilder
                </a>
              </p>
              <p className="underline underline-offset-4">
                <a
                  href="https://www.twitch.tv/malena"
                  target="_blank"
                  rel="noreferrer"
                >
                  Malena
                </a>
              </p>

              <h1 className="text-2xl font-bold mt-4">Guests</h1>
              <p className="underline underline-offset-4">
                <a
                  href="https://www.twitch.tv/mitchjones"
                  target="_blank"
                  rel="noreferrer"
                >
                  MitchJones
                </a>
              </p>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mt-4">Streamers</h1>
              <p className="underline underline-offset-4">
                <a
                  href="https://www.twitch.tv/mizkif"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mizkif
                </a>
              </p>
              <p className="underline underline-offset-4">
                <a
                  href="https://www.twitch.tv/nmplol"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nmplol
                </a>
              </p>
              <p className="underline underline-offset-4">
                <a
                  href="https://www.twitch.tv/cyr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cyr
                </a>
              </p>
              <p className="underline underline-offset-4">
                <a
                  href="https://www.twitch.tv/richwcampbell"
                  target="_blank"
                  rel="noreferrer"
                >
                  RichwCampbell
                </a>
              </p>
              <p className="underline underline-offset-4">
                <a
                  href="https://www.twitch.tv/tectone"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tectone
                </a>
              </p>
              <p className="underline underline-offset-4">
                <a
                  href="https://www.twitch.tv/erobb221"
                  target="_blank"
                  rel="noreferrer"
                >
                  Erobb221
                </a>
              </p>
              <p className="underline underline-offset-4">
                <a
                  href="https://www.twitch.tv/esfandtv"
                  target="_blank"
                  rel="noreferrer"
                >
                  EsfandTV
                </a>
              </p>
              <p className="underline underline-offset-4">
                <a
                  href="https://www.twitch.tv/Lacari"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lacari
                </a>
              </p>
              <h1 className="text-2xl font-bold mt-4">Chef</h1>
              <p className="underline underline-offset-4">
                <a
                  href="https://www.twitch.tv/exxzy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Exxzy
                </a>
              </p>
            </div>
          </div>

          <div className="my-10">
            <div
              className=" border-l-4 text-white-700 p-4 font-bold"
              role="alert"
            >
              <p>💡</p>
              <p>{tips.knowYourLimits}</p>
            </div>

            <div className="my-10">
              <div
                className=" border-l-4 text-white-700 p-4 font-bold"
                role="alert"
              >
                <p>💡</p>
                <p>{tips.supplements}</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mt-4 mb-2">🥩 Meal Plans</h1>
              <p className="underline underline-offset-4">
                {" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/1Fto6sArnx-lBoxXyFEC3cLCbVQkJdwT9-JsPD9Agra8/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  OTK Meal plans
                </a>
              </p>
              <p className="underline underline-offset-4">
                {" "}
                <a href="https://bit.ly/3vil5en">
                  Mizkif meal plan with supplements
                </a>
              </p>
              <p className="underline underline-offset-4">
                {" "}
                <a href="https://bit.ly/3cReLVb">
                  Mizkif meal plan without eggs and supplements
                </a>
              </p>
            </div>

            <div className="w-1/2">
              <h1 className="text-2xl font-bold mt-4">
                <strong>💖</strong> Community
              </h1>
              <figure className="link-to-page underline underline-offset-4">
                <a href="">
                  Amazon Supplements by <strong>WakeWilder</strong>
                </a>
              </figure>
              <figure className="link-to-page underline underline-offset-4">
                <a href="">
                  Stream workout log - Maintained by <strong>DrStone</strong>
                </a>
              </figure>
              <p className="underline underline-offset-4">
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
              <h1 className="text-2xl font-bold mt-4 mb-2">📕 Plans</h1>
              <figure className="link-to-page underline underline-offset-4">
                <a href="">Workout Beginner</a>
              </figure>
              <figure className="link-to-page underline underline-offset-4">
                <a href="">Workout plan Week 1</a>
              </figure>
              <figure className="link-to-page underline underline-offset-4">
                <a href="">Workout plan Week 2</a>
              </figure>
              <figure className="link-to-page underline underline-offset-4">
                <Link href="/exercises">
                  <a>Exercises</a>
                </Link>
              </figure>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mt-4 mb-2">🛠️ Tools</h1>
              <p className="underline underline-offset-4">
                MyFitnessPal{" "}
                <a
                  href="https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718"
                  target="_blank"
                  rel="noreferrer"
                >
                  iOS{" "}
                </a>
                /{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.myfitnesspal.android&amp;hl=en&amp;gl=US"
                  target="_blank"
                  rel="noreferrer"
                >
                  Android
                </a>
              </p>
              <p className="underline underline-offset-4">
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
              <h1 className="text-2xl font-bold mt-4 mb-2">📈 Progress</h1>
              <figure className="link-to-page underline underline-offset-4">
                <a href="">
                  <h1> Camp Knut - Calendar</h1>
                </a>
              </figure>

              <figure className="link-to-page underline underline-offset-4">
                <a href="">Weekly results</a>
              </figure>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mt-4 mb-2">📃 Articles</h1>
              <p className="underline underline-offset-4">
                {" "}
                <a href="https://physiqonomics.com/fat-loss/">
                  The Best Fat Loss Article on the Motherfuckin’ Internet
                </a>
              </p>
            </div>
          </div>

          <div className="w-1/2 mt-20">
            <h3 className="text-xl font-bold mt-4">Want to help out?</h3>
            <figure className="link-to-page underline underline-offset-4">
              <a href="https://campknut.gg/roadmap">
                <h1>Roadmap</h1>
              </a>
            </figure>
          </div>

          <figure className="block-color-gray_background callout mt-8">
            <div className="text-center">
              If you have questions about training - Post them in #camp-knut in
              the{" "}
              <strong className="underline underline-offset-4">
                <a
                  href="http://discord.gg/knut"
                  target="_blank"
                  rel="noreferrer"
                >
                  Discord
                </a>
              </strong>
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
