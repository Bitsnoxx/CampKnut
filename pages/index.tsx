import type { NextPage } from "next";
import Image from "next/image";
import { tips } from "../content/text";
import Link from "next/link";
import Important from "../components/ui/Important";
import Participants from "../components/mainPage/Participants";
import Introduction from "../components/mainPage/Introduction";

const Home: NextPage = () => {
  return (
    <article>
      <div>
        <Image
          src="/CampKnut.webp"
          alt="Camp Knut"
          width={2560}
          height={1450}
          priority={true}
          decoding="async"
          className="aspect-auto"
        />

        <Introduction />

        <Participants />

        <Important>
          <p>💡 {tips.knowYourLimits}</p>
        </Important>

        <Important>
          <p>💡 {tips.supplements}</p>
        </Important>

        <div className="flex">
          <div className="w-1/2">
            <h1 className="text-2xl font-black mt-4 light:text-knut-light-header dark:text-knut-dark-header mb-2">
              🥩 Meal Plans
            </h1>
            <p>
              {" "}
              <a
                href="https://docs.google.com/spreadsheets/d/1Fto6sArnx-lBoxXyFEC3cLCbVQkJdwT9-JsPD9Agra8/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="light:text-knut-light-header dark:text-knut-dark-header hover:font-black"
              >
                OTK Meal plans
              </a>
            </p>
            <p>
              {" "}
              <a
                href="https://bit.ly/3vil5en"
                className="light:text-knut-light-header dark:text-knut-dark-header hover:font-black"
              >
                Mizkif meal plan with supplements
              </a>
            </p>
            <p>
              {" "}
              <a
                href="https://bit.ly/3cReLVb"
                className="light:text-knut-light-header dark:text-knut-dark-header hover:font-black"
              >
                Mizkif meal plan without eggs and supplements
              </a>
            </p>
          </div>

          <div className="w-1/2">
            <h1 className="text-2xl font-black mt-4 light:text-knut-light-header dark:text-knut-dark-header">
              💖 Community
            </h1>
            <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-black">
              <a href="">
                Amazon Supplements by <strong>WakeWilder</strong>
              </a>
            </figure>
            <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-black">
              <a href="">
                Stream workout log - Maintained by <strong>DrStone</strong>
              </a>
            </figure>
            <p>
              📀{" "}
              <a
                href="https://open.spotify.com/playlist/0bNUdcAFj5Un6XNKZ5Xora?si=e5e3832466244996"
                target="_blank"
                rel="noreferrer"
                className="light:text-knut-light-header dark:text-knut-dark-header hover:font-black"
              >
                Camp Knut Gym Playlist - Maintained by{" "}
              </a>
              <a
                href="https://open.spotify.com/playlist/0bNUdcAFj5Un6XNKZ5Xora?si=e5e3832466244996"
                target="_blank"
                rel="noreferrer"
                className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-black"
              >
                <strong>Tahtooz</strong>
              </a>
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <h1 className="text-2xl font-black mt-4 light:text-knut-light-header dark:text-knut-dark-header mb-2">
              📕 Plans
            </h1>
            <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-black">
              <a href="">Workout Beginner</a>
            </figure>
            <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-black">
              <a href="">Workout plan Week 1</a>
            </figure>
            <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-black">
              <a href="">Workout plan Week 2</a>
            </figure>
            <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-black">
              <Link href="/exercises">
                <a>Exercises</a>
              </Link>
            </figure>
          </div>
          <div className="w-1/2">
            <h1 className="text-2xl font-black mt-4 light:text-knut-light-header dark:text-knut-dark-header mb-2">
              🛠️ Tools
            </h1>
            <p className="light:text-knut-light-header dark:text-knut-dark-header">
              MyFitnessPal{" "}
              <a
                href="https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718"
                target="_blank"
                rel="noreferrer"
                className="light:text-knut-light-header dark:text-knut-dark-header hover:font-black"
              >
                iOS{" "}
              </a>
              /{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.myfitnesspal.android&amp;hl=en&amp;gl=US"
                target="_blank"
                rel="noreferrer"
                className="light:text-knut-light-header dark:text-knut-dark-header hover:font-black"
              >
                Android
              </a>
            </p>
            <p>
              {" "}
              <a
                href="https://www.bodybuilding.com/fun/bmr_calculator.htm"
                target="_blank"
                rel="noreferrer"
                className="light:text-knut-light-header dark:text-knut-dark-header hover:font-black"
              >
                BMR Calculator
              </a>
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <h1 className="text-2xl font-black mt-4 light:text-knut-light-header dark:text-knut-dark-header mb-2">
              📈 Progress
            </h1>
            <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-black">
              <a href="">
                <h1> Camp Knut - Calendar</h1>
              </a>
            </figure>

            <figure className="link-to-page light:text-knut-light-header dark:text-knut-dark-header hover:font-black">
              <a href="">Weekly results</a>
            </figure>
          </div>
          <div className="w-1/2">
            <h1 className="text-2xl font-black mt-4 light:text-knut-light-header dark:text-knut-dark-header mb-2">
              📃 Articles
            </h1>
            <p>
              {" "}
              <a
                href="https://physiqonomics.com/fat-loss/"
                className="light:text-knut-light-header dark:text-knut-dark-header hover:font-black"
              >
                The Best Fat Loss Article on the Motherfuckin’ Internet
              </a>
            </p>
          </div>
        </div>

        <div className="text-center my-20">
          <h3 className="text-xl font-black light:text-knut-light-header dark:text-knut-dark-header hover:font-black mt-4">
            Want to help out?
          </h3>
          <figure>
            <a
              href="https://github.com/Bitsnoxx/CampKnut/issues"
              className="light:text-knut-light-header dark:text-knut-dark-header hover:font-black"
            >
              <h1>Roadmap</h1>
            </a>
          </figure>
        </div>

        <figure className="block-color-gray_background callout mt-8">
          <div className="text-center">
            If you have questions about training - Post them in #camp-knut in
            the{" "}
            <p className="light:text-knut-light-header dark:text-knut-dark-header hover:font-black">
              <a href="http://discord.gg/knut" target="_blank" rel="noreferrer">
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
  );
};

export default Home;
