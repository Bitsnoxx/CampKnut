import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  FaTwitch,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaReddit,
} from "react-icons/fa";
import { Container, Center, AspectRatio } from "@mantine/core";
import { introduction, tips } from "../content/text";
import { MdContactSupport } from "react-icons/md";
/* import { participants } from "../content/streamers"; */

const Home: NextPage = () => {
  return (
    <Container size="md" px="md">
      <article className="page sans">
        <header>
          <p className="page-title text-2xl text-center font-bold	my-12">
            {introduction.title} 💪
          </p>
        </header>

        <div className="page-body">
          <picture>
            <source srcSet="/CampKnut.avif" type="image/avif" />
            <source srcSet="/CampKnut.webp" type="image/webp" />
            <source srcSet="/CampKnut.jpg" type="image/jpg" />
            <Image
              src="/CampKnut.avif"
              alt="Camp Knut"
              width={2560}
              height={1250}
              priority={true}
              decoding="async"
              className="aspect-video"
            />
          </picture>

          <h2 className="mt-8 text-2xl font-bold">
            What is {introduction.title}?
          </h2>
          <p>{introduction.whatIs}</p>
          <h2 className="mt-8 text-2xl font-bold">Goal🏆</h2>
          <p>{introduction.goal}</p>
          <h2 className="mt-8 text-2xl font-bold">Who is Knut?</h2>
          <p>{introduction.whoIsKnut}</p>

          <div className="flex mb-8">
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mt-4">Trainers</h1>
              <p>
                <a href="https://twitch.tv/knut">Knut</a>
              </p>
              <p>
                <a href="https://www.twitch.tv/wakewilder">WakeWilder</a>
              </p>
              <h1 className="text-2xl font-bold mt-4">Judges</h1>
              <p>
                <a href="https://twitch.tv/knut">Knut</a>
              </p>
              <p>
                <a href="https://www.twitch.tv/asmongold">Asmongold</a>
              </p>
              <p>
                <a href="https://www.twitch.tv/wakewilder">WakeWilder</a>
              </p>
              <p>
                <a href="https://www.twitch.tv/malena">Malena</a>
              </p>

              <h1 className="text-2xl font-bold mt-4">Guests</h1>
              <p>
                <a href="https://www.twitch.tv/mitchjones">MitchJones</a>
              </p>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mt-4">Streamers</h1>
              <p>
                <a href="https://www.twitch.tv/mizkif">Mizkif</a>
              </p>
              <p>
                <a href="https://www.twitch.tv/nmplol">Nmplol</a>
              </p>
              <p>
                <a href="https://www.twitch.tv/cyr">Cyr</a>
              </p>
              <p>
                <a href="https://www.twitch.tv/richwcampbell">RichwCampbell</a>
              </p>
              <p>
                <a href="https://www.twitch.tv/tectone">Tectone</a>
              </p>
              <p>
                <a href="https://www.twitch.tv/erobb221">Erobb221</a>
              </p>
              <p>
                <a href="https://www.twitch.tv/esfandtv">EsfandTV</a>
              </p>
              <p>
                <a href="https://www.twitch.tv/Lacari">Lacari</a>
              </p>
              <h1 className="text-2xl font-bold mt-4">Chef</h1>
              <p>
                <a href="https://www.twitch.tv/exxzy">Exxzy</a>
              </p>
            </div>
          </div>

          <p></p>
          <figure className="block-color-gray_background callout">
            <div>
              <span className="icon">💡</span>
            </div>
            <div>
              <strong>{tips.knowYourLimits}</strong>
            </div>
          </figure>
          <p></p>
          <figure className="block-color-gray_background callout">
            <div>
              <span className="icon">💡</span>
            </div>
            <div className="mb-8">
              <strong>{tips.supplements}</strong>
            </div>
          </figure>
          <p></p>

          <div className="flex">
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mt-4">🥩 Meal Plans</h1>
              <p>
                🧾{" "}
                <a href="https://docs.google.com/spreadsheets/d/1Fto6sArnx-lBoxXyFEC3cLCbVQkJdwT9-JsPD9Agra8/edit?usp=sharing">
                  OTK Meal plans
                </a>
              </p>
              <p>
                🧾{" "}
                <a href="https://bit.ly/3vil5en">
                  Mizkif meal plan with supplements
                </a>
              </p>
              <p>
                🧾{" "}
                <a href="https://bit.ly/3cReLVb">
                  Mizkif meal plan without eggs and supplements
                </a>
              </p>
              <h1 className="text-2xl font-bold mt-4">💊 Supplements</h1>
              <figure className="link-to-page">
                <a href="Camp%20Knut%20%F0%9F%92%AA%2017e230f0c0994684b7fd08ded2966fcf/Camp%20Knut%20Amazon%20Suplements%20by%20WakeWilder%200e73dd9909e84c338a704638a837289d.html">
                  <span className="icon">📝</span>Camp Knut Amazon Suplements by
                  WakeWilder
                </a>
              </figure>
              <h1 className="text-2xl font-bold mt-4">
                <strong>💖</strong> Community
              </h1>
              <figure className="link-to-page">
                <a href="Camp%20Knut%20%F0%9F%92%AA%2017e230f0c0994684b7fd08ded2966fcf/Stream%20workout%20log%20-%20Maintained%20by%20DrStone%209b89ac122f0749328c7f13ffc63fe256.html">
                  <span className="icon">📝</span>Stream workout log -
                  Maintained by DrStone
                </a>
              </figure>
              <p>
                📀{" "}
                <a href="https://open.spotify.com/playlist/0bNUdcAFj5Un6XNKZ5Xora?si=e5e3832466244996">
                  Camp Knut Gym Playlist - Maintained by{" "}
                </a>
                <a href="https://open.spotify.com/playlist/0bNUdcAFj5Un6XNKZ5Xora?si=e5e3832466244996">
                  <strong>
                    <strong>Tahtooz</strong>
                  </strong>
                </a>
              </p>
              <h1 className="text-2xl font-bold mt-4">📃 Articles</h1>
              <p>
                🧾{" "}
                <a href="https://physiqonomics.com/fat-loss/">
                  <strong>
                    The Best Fat Loss Article on the Motherfuckin’ Internet
                  </strong>
                </a>
              </p>
              <h3 className="{ContentTitle}">Want to help out?</h3>
              <figure className="link-to-page">
                <a href="Camp%20Knut%20%F0%9F%92%AA%2017e230f0c0994684b7fd08ded2966fcf/Roadmap%20ffe306ad089245cc99038389d2d9061d.html">
                  <span className="icon">🚗</span>Roadmap
                </a>
              </figure>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mt-4">📕 Plans</h1>
              <figure className="link-to-page">
                <a href="Camp%20Knut%20%F0%9F%92%AA%2017e230f0c0994684b7fd08ded2966fcf/Workout%20Beginner%20b0e37f37cc5a4500af7cd172fcd9ac43.html">
                  <span className="icon">📝</span>Workout Beginner
                </a>
              </figure>
              <figure className="link-to-page">
                <a href="Camp%20Knut%20%F0%9F%92%AA%2017e230f0c0994684b7fd08ded2966fcf/Workout%20plan%20Week%201%20fdfd1d70e98d484f82f5380a8477fa53.html">
                  <span className="icon">📝</span>Workout plan Week 1
                </a>
              </figure>
              <figure className="link-to-page">
                <a href="Camp%20Knut%20%F0%9F%92%AA%2017e230f0c0994684b7fd08ded2966fcf/Workout%20plan%20Week%202%202581ca6ecaef4fb591068811a919793e.html">
                  <span className="icon">📝</span>Workout plan Week 2
                </a>
              </figure>
              <figure className="link-to-page">
                <a href="Camp%20Knut%20%F0%9F%92%AA%2017e230f0c0994684b7fd08ded2966fcf/Exercises%20941851ed2bd5482eb0ef19f46239fde3.html">
                  <span className="icon">📝</span>Exercises
                </a>
              </figure>{" "}
              <h1 className="text-2xl font-bold mt-4">📈 Progress</h1>
              <figure className="link-to-page">
                <a href="Camp%20Knut%20%F0%9F%92%AA%2017e230f0c0994684b7fd08ded2966fcf/Camp%20Knut%20-%20Calendar%20034214e271cf4dd68ac7a1020cd8795d.html">
                  <span className="icon">📅</span>Camp Knut - Calendar
                </a>
              </figure>
              <figure className="link-to-page">
                <a href="Camp%20Knut%20%F0%9F%92%AA%2017e230f0c0994684b7fd08ded2966fcf/Weekly%20results%200756d199cefd4d90b2be7aad2faf8f0d.html">
                  <span className="icon">📝</span>Weekly results
                </a>
              </figure>
              <h1 className="text-2xl font-bold mt-4">🛠️ Tools</h1>
              <p>
                📱 MyFitnessPal{" "}
                <a href="https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718">
                  iOS{" "}
                </a>
                /{" "}
                <a href="https://play.google.com/store/apps/details?id=com.myfitnesspal.android&amp;hl=en&amp;gl=US">
                  Android
                </a>
              </p>
              <p>
                📱{" "}
                <a href="https://www.bodybuilding.com/fun/bmr_calculator.htm">
                  BMR Calculator
                </a>
              </p>
            </div>
          </div>

          <figure className="block-color-gray_background callout mt-8">
            <div className="text-center">
              If you have questions about training - Post them in #camp-knut in
              the{" "}
              <strong>
                <a href="http://discord.gg/knut">Discord</a>
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
