import type { NextPage } from "next";
import Image from "next/image";
import { tips } from "../content/text";
import Link from "next/link";
import Important from "../components/ui/Important";
import Participants from "../components/mainPage/Participants";
import Introduction from "../components/mainPage/Introduction";
import CustomLink from "../components/ui/CustomLink";

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
              <CustomLink
                  href={"https://docs.google.com/spreadsheets/d/1Fto6sArnx-lBoxXyFEC3cLCbVQkJdwT9-JsPD9Agra8/edit?usp=sharing"}
                  type={"a"}
                  className={"light:text-knut-light-header dark:text-knut-dark-header hover:font-black"}
              >
                OTK Meal plans
              </CustomLink>
            </p>
            <p>
              <CustomLink
                  href={"https://bit.ly/3vil5en"}
                  type={"a"}
                  className={"light:text-knut-light-header dark:text-knut-dark-header hover:font-black"}
              >
                Mizkif meal plan with supplements
              </CustomLink>
            </p>
            <p>
              <CustomLink
                  href={"https://bit.ly/3cReLVb"}
                  type={"a"}
                  className={"light:text-knut-light-header dark:text-knut-dark-header hover:font-black"}
              >
                Mizkif meal plan without eggs and supplements
              </CustomLink>
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
            <p>
              <CustomLink
                  href={""}
                  type={"Link"}
                  className={"light:text-knut-light-header dark:text-knut-dark-header hover:font-black"}
              >
                Workout Beginner
              </CustomLink>
            </p>
            <p>
              <CustomLink
                  href={""}
                  type={"Link"}
                  className={"light:text-knut-light-header dark:text-knut-dark-header hover:font-black"}
              >
                Workout plan Week 1
              </CustomLink>
            </p>
            <p>
              <CustomLink
                  href={""}
                  type={"Link"}
                  className={"light:text-knut-light-header dark:text-knut-dark-header hover:font-black"}
              >
                Workout plan Week 2
              </CustomLink>
            </p>
            <p>
              <CustomLink
                  href={"/exercises"}
                  type={"Link"}
                  className={"light:text-knut-light-header dark:text-knut-dark-header hover:font-black"}
              >
                Exercises
              </CustomLink>
            </p>
          </div>
          <div className="w-1/2">
            <h1 className="text-2xl font-black mt-4 light:text-knut-light-header dark:text-knut-dark-header mb-2">
              🛠️ Tools
            </h1>
            <p className="light:text-knut-light-header dark:text-knut-dark-header">
              MyFitnessPal{" "}
              <CustomLink
                  href={"https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718"}
                  type={"a"}
                  className={"light:text-knut-light-header dark:text-knut-dark-header hover:font-black"}
              >
                iOS
              </CustomLink>
              {" "}/{" "}
              <CustomLink
                  href={"https://play.google.com/store/apps/details?id=com.myfitnesspal.android&amp;hl=en&amp;gl=US"}
                  type={"a"}
                  className={"light:text-knut-light-header dark:text-knut-dark-header hover:font-black"}
              >
                Android
              </CustomLink>
            </p>
            <p>
              <CustomLink
                  href={"https://www.bodybuilding.com/fun/bmr_calculator.htm"}
                  type={"a"}
                  className={"light:text-knut-light-header dark:text-knut-dark-header hover:font-black"}
              >
                BMR Calculator
              </CustomLink>
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <h1 className="text-2xl font-black mt-4 light:text-knut-light-header dark:text-knut-dark-header mb-2">
              📈 Progress
            </h1>
            <p>
              <CustomLink
                  href={""}
                  type={"Link"}
                  className={"light:text-knut-light-header dark:text-knut-dark-header hover:font-black"}
              >
                Camp Knut - Calendar
              </CustomLink>
            </p>

            <p>
              <CustomLink
                  href={""}
                  type={"Link"}
                  className={"light:text-knut-light-header dark:text-knut-dark-header hover:font-black"}
              >
                Weekly results
              </CustomLink>
            </p>

          </div>
          <div className="w-1/2">
            <h1 className="text-2xl font-black mt-4 light:text-knut-light-header dark:text-knut-dark-header mb-2">
              📃 Articles
            </h1>
            <p>
              <CustomLink
                  href={"https://physiqonomics.com/fat-loss/"}
                  type={"a"}
                  className={"light:text-knut-light-header dark:text-knut-dark-header hover:font-black"}
              >
                The Best Fat Loss Article on the Motherfuckin’ Internet
              </CustomLink>
            </p>
          </div>
        </div>

        <div className="text-center my-20">
          <h3 className="text-xl font-black light:text-knut-light-header dark:text-knut-dark-header hover:font-black mt-4">
            Want to help out?
          </h3>
          <p>
            <CustomLink
                href={"https://github.com/Bitsnoxx/CampKnut/issues"}
                type={"a"}
                className={"light:text-knut-light-header dark:text-knut-dark-header hover:font-black"}
            >
              Roadmap
            </CustomLink>
          </p>
        </div>

        <Important>
          <div className="text-center">
            If you have questions about training - Post them in #camp-knut in
            the{" "}
            <CustomLink
                href={"http://discord.gg/knut"}
                type={"a"}
                className={"light:text-knut-light-header dark:text-knut-dark-header hover:font-black"}
            >
              Discord
            </CustomLink>
          </div>
          <div className="text-center">
            Feedback, issues or questions? Contact{" "}
            <strong>Bitsnoxx#1337</strong> on Discord.
          </div>
        </Important>
      </div>
    </article>
  );
};

export default Home;
