import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaTwitch, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { FcReddit } from "react-icons/fc";
import { Container, Center } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <Container size="md" px="md">
      <article className="page sans">
        <header>
          <Center>
            <h1 className="page-title">Camp Knut 💪</h1>
          </Center>
          <Center>
            <FaTwitch color="#9146FF" size={42} />
            <FcReddit size={42} />
            <FaYoutube color="#FF0000" size={42} />
            <FaTwitter color="#1DA1F2" size={42} />
            <FaInstagram className="instagram" size={42} />
          </Center>
        </header>

        <div className="page-body">
          <Image
            width={2560}
            height={1250}
            src="/CampKnut.avif"
            alt="Camp Knut"
          />
          <h1>What is Camp Knut?</h1>
          <p>
            Camp Knut is a 30-day long training camp, where a group of streamers
            tries to follow Knut’s workout routine and diet.
          </p>
          <h1>
            <strong>Goal </strong>🏆
          </h1>
          <p>
            Improve fitness, look and health as much as possible in 30 days.
          </p>
          <p>Final show will be a fitness/bodybuilding competition.</p>
          <p></p>
          <p></p>
          <hr />
          <div className="column-list">
            <div className="column">
              <p></p>
              <h1>Trainers</h1>
              <p>
                <a href="https://twitch.tv/knut">Knut</a>
              </p>
              <p>
                <a href="https://www.twitch.tv/wakewilder">WakeWilder</a>
              </p>
              <h1>Judges</h1>
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
            </div>
            <div className="column">
              <p></p>
              <h1>Streamers</h1>
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
            </div>
          </div>
          <div className="column-list">
            <div className="column">
              <h1>Chef</h1>
              <p>
                <a href="https://www.twitch.tv/exxzy">
                  <strong>Exxzy</strong>
                </a>
              </p>
            </div>
            <div className="column">
              <h1>Guests</h1>
              <p>
                <a href="https://www.twitch.tv/mitchjones">MitchJones</a>
              </p>
            </div>
          </div>
          <p></p>
          <hr />
          <p></p>
          <figure className="block-color-gray_background callout">
            <div>
              <span className="icon">💡</span>
            </div>
            <div>
              <strong>
                Remember to take care of your health, you know your own limits
                better than anyone else. If you end up injuring yourself, it
                will only set you further back.
              </strong>
            </div>
          </figure>
          <p></p>
          <figure className="block-color-gray_background callout">
            <div>
              <span className="icon">💡</span>
            </div>
            <div>
              <strong>
                Supplements aren’t needed, but if you have the money and want to
                maximize your workouts - Go for it!
              </strong>
            </div>
          </figure>
          <p></p>
          <hr />
          <div className="column-list">
            <div className="column">
              <h1>🥩 Meal Plans</h1>
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
            </div>
            <div className="column">
              <h1>📕 Plans</h1>
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
              </figure>
            </div>
          </div>
          <div className="column-list">
            <div className="column">
              <h1>💊 Supplements</h1>
              <figure className="link-to-page">
                <a href="Camp%20Knut%20%F0%9F%92%AA%2017e230f0c0994684b7fd08ded2966fcf/Camp%20Knut%20Amazon%20Suplements%20by%20WakeWilder%200e73dd9909e84c338a704638a837289d.html">
                  <span className="icon">📝</span>Camp Knut Amazon Suplements by
                  WakeWilder
                </a>
              </figure>
            </div>
            <div className="column">
              <h1>🛠️ Tools</h1>
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
          <div className="column-list">
            <div className="column">
              <h1>
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
            </div>
            <div className="column">
              <h1>📈 Progress</h1>
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
            </div>
          </div>
          <h1>📃 Articles</h1>
          <p>
            🧾{" "}
            <a href="https://physiqonomics.com/fat-loss/">
              <strong>
                The Best Fat Loss Article on the Motherfuckin’ Internet
              </strong>
            </a>
          </p>
          <p></p>
          <hr />
          <p></p>
          <h3>Want to help out?</h3>
          <figure className="link-to-page">
            <a href="Camp%20Knut%20%F0%9F%92%AA%2017e230f0c0994684b7fd08ded2966fcf/Roadmap%20ffe306ad089245cc99038389d2d9061d.html">
              <span className="icon">🚗</span>Roadmap
            </a>
          </figure>
          <p></p>
          <hr />
          <p></p>
          <figure className="block-color-gray_background callout">
            <div>
              <span className="icon">🛠</span>
            </div>
            <div>
              If you have questions about training - Post them in #camp-knut in
              the{" "}
              <strong>
                <a href="http://discord.gg/knut">Discord</a>
              </strong>
              . Feedback, issues or questions? Contact{" "}
              <strong>Bitsnoxx#1337</strong> on Discord.{" "}
            </div>
          </figure>
        </div>
      </article>
    </Container>
  );
};

export default Home;
