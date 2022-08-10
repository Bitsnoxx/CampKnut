import Image from 'next/image';

import PageLayout from 'components/layout/PageLayout';
import Introduction from 'components/mainPage/Introduction';
import Participants from 'components/mainPage/Participants';
import CustomLink from 'components/ui/CustomLink';
import Important from 'components/ui/Important';
import {seo, tips} from 'content/text';
import { Streamer } from 'model/twitch';
import {OpenGraph, OpenGraphImage} from "../model/opengraph";
import {baseUrl} from "../content/links";

export async function getStaticProps() {
  const oAuthResponse = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.NEXT_TWITCH_CLIENT_ID}&client_secret=${process.env.NEXT_TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
    {
      method: 'POST',
    },
  );

  let oAuthJSON = await oAuthResponse.json();

  let request = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + oAuthJSON.access_token,
      'Client-Id': process.env.NEXT_TWITCH_CLIENT_ID || '',
    },
  };

  const url =
    'https://api.twitch.tv/helix/streams?&user_login=knut&user_login=Malena&user_login=Asmongold&user_login=MitchJones&user_login=Malena&user_login=Jeanette&user_login=Streamers&user_login=Mizkif&user_login=Nmplol&user_login=Cyr&user_login=RichwCampbell&user_login=Tectone&user_login=Erobb221&user_login=EsfandTV&user_login=Lacari&user_login=Chefs&user_login=Exxzy';

  const res = await fetch(url, request);
  const data = await res.json();

  return {
    props: {
      twitch: data.data,
    },
    revalidate: 60,
  };
}

interface HomeProps {
  twitch: Streamer[];
}

const Home = ({ twitch }: HomeProps) => {

  let og_Image:OpenGraphImage = {
    height: "300",
    type: "image",
    url: "",
    width: "",
    alt: "A surely not photoshoped/edited phot of Knut himself"
  }

  let og:OpenGraph = {
    site_name: seo.title,
    title: seo.title,
    locale: "en_GB",
    description: seo.description,
    type: "website",
    url: baseUrl,
  }

  return (
    <PageLayout openGraph={og}>
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

          <Participants twitchData={twitch} />

          <Important>
            <p>💡 {tips.knowYourLimits}</p>
          </Important>

          <Important>
            <p>💡 {tips.supplements}</p>
          </Important>

          <div className="flex">
            <div className="w-1/2">
              <h2 className="text-2xl mt-4 font-black text-knut-light-header dark:text-knut-dark-header">
                🥩 Meal Plans
              </h2>
              <p>
                <CustomLink
                  href={
                    'https://docs.google.com/spreadsheets/d/1Fto6sArnx-lBoxXyFEC3cLCbVQkJdwT9-JsPD9Agra8/edit?usp=sharing'
                  }
                  type={'a'}
                  darkColor={'dark:text-knut-dark-header'}
                  lightColor={'text-knut-light-header'}
                >
                  OTK Meal plans
                </CustomLink>
              </p>
              <p>
                <CustomLink
                  href={'https://bit.ly/3vil5en'}
                  type={'a'}
                  darkColor={'dark:text-knut-dark-header'}
                  lightColor={'text-knut-light-header'}
                >
                  Mizkif meal plan with supplements
                </CustomLink>
              </p>
              <p>
                <CustomLink
                  href={'https://bit.ly/3cReLVb'}
                  type={'a'}
                  darkColor={'dark:text-knut-dark-header'}
                  lightColor={'text-knut-light-header'}
                >
                  Mizkif meal plan without eggs and supplements
                </CustomLink>
              </p>
            </div>

            <div className="w-1/2">
              <h2 className="text-2xl mt-4 font-black text-knut-light-header dark:text-knut-dark-header">
                💖 Community
              </h2>
              <p>
                <CustomLink
                  href={''}
                  type={'Link'}
                  darkColor={'dark:text-knut-dark-header'}
                  lightColor={'text-knut-light-header'}
                >
                  <>
                    {' '}
                    Amazon Supplements by <strong>WakeWilder</strong>{' '}
                  </>
                </CustomLink>
              </p>

              <p>
                <CustomLink
                  href={''}
                  type={'Link'}
                  darkColor={'dark:text-knut-dark-header'}
                  lightColor={'text-knut-light-header'}
                >
                  <>
                    {' '}
                    Stream workout log - Maintained by <strong>DrStone</strong>{' '}
                  </>
                </CustomLink>
              </p>

              <p>
                📀{' '}
                <CustomLink
                  href={
                    'https://open.spotify.com/playlist/0bNUdcAFj5Un6XNKZ5Xora?si=e5e3832466244996'
                  }
                  type={'a'}
                  darkColor={'dark:text-knut-dark-header'}
                  lightColor={'text-knut-light-header'}
                >
                  <>
                    {' '}
                    Camp Knut Gym Playlist - Maintained by <strong>Tahtooz</strong>{' '}
                  </>
                </CustomLink>
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2">
              <h2 className="text-2xl mt-4 mb-2 font-black text-knut-light-header dark:text-knut-dark-header">
                📕 Plans
              </h2>
              <p>
                <CustomLink
                  href={''}
                  type={'Link'}
                  darkColor={'dark:text-knut-dark-header'}
                  lightColor={'text-knut-light-header'}
                >
                  Workout Beginner
                </CustomLink>
              </p>
              <p>
                <CustomLink
                  href={''}
                  type={'Link'}
                  darkColor={'dark:text-knut-dark-header'}
                  lightColor={'text-knut-light-header'}
                >
                  Workout plan Week 1
                </CustomLink>
              </p>
              <p>
                <CustomLink
                  href={''}
                  type={'Link'}
                  darkColor={'dark:text-knut-dark-header'}
                  lightColor={'text-knut-light-header'}
                >
                  Workout plan Week 2
                </CustomLink>
              </p>
              <p>
                <CustomLink
                  href={'/exercises'}
                  type={'Link'}
                  darkColor={'dark:text-knut-dark-header'}
                  lightColor={'text-knut-light-header'}
                >
                  Exercises
                </CustomLink>
              </p>
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl mt-4 mb-2 font-black text-knut-light-header dark:text-knut-dark-header">
                🛠️ Tools
              </h2>
              <p className="text-knut-light-header dark:text-knut-dark-header">
                MyFitnessPal{' '}
                <CustomLink
                  href={'https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718'}
                  type={'a'}
                  darkColor={'dark:text-knut-dark-header'}
                  lightColor={'text-knut-light-header'}
                >
                  iOS
                </CustomLink>{' '}
                /{' '}
                <CustomLink
                  href={
                    'https://play.google.com/store/apps/details?id=com.myfitnesspal.android&amp;hl=en&amp;gl=US'
                  }
                  type={'a'}
                  darkColor={'dark:text-knut-dark-header'}
                  lightColor={'text-knut-light-header'}
                >
                  Android
                </CustomLink>
              </p>
              <p>
                <CustomLink
                  href={'https://www.bodybuilding.com/fun/bmr_calculator.htm'}
                  type={'a'}
                  darkColor={'dark:text-knut-dark-header'}
                  lightColor={'text-knut-light-header'}
                >
                  BMR Calculator
                </CustomLink>
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2">
              <h2 className="text-2xl mt-4 mb-2 font-black text-knut-light-header dark:text-knut-dark-header">
                📈 Progress
              </h2>
              <p>
                <CustomLink
                  href={''}
                  type={'Link'}
                  darkColor={'dark:text-knut-dark-header'}
                  lightColor={'text-knut-light-header'}
                >
                  Camp Knut - Calendar
                </CustomLink>
              </p>

              <p>
                <CustomLink
                  href={''}
                  type={'Link'}
                  darkColor={'dark:text-knut-dark-header'}
                  lightColor={'text-knut-light-header'}
                >
                  Weekly results
                </CustomLink>
              </p>
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl mt-4 mb-2 font-black text-knut-light-header dark:text-knut-dark-header">
                📃 Articles
              </h2>
              <p>
                <CustomLink
                  href={'https://physiqonomics.com/fat-loss/'}
                  type={'a'}
                  darkColor={'dark:text-knut-dark-header'}
                  lightColor={'text-knut-light-header'}
                >
                  The Best Fat Loss Article on the Motherfuckin’ Internet
                </CustomLink>
              </p>
            </div>
          </div>

          <div className="my-20 text-center">
            <h2 className="text-xl mt-4 font-black text-knut-light-header dark:text-knut-dark-header">
              Want to help out?
            </h2>
            <p>
              <CustomLink
                href={'https://github.com/Bitsnoxx/CampKnut/issues'}
                type={'a'}
                lightColor={'text-knut-light-header'}
                darkColor={'dark:text-knut-dark-header'}
              >
                Roadmap
              </CustomLink>
            </p>
          </div>

          <Important>
            <div className="text-center">
              If you have questions about training - Post them in #camp-knut in the{' '}
              <CustomLink
                href={'http://discord.gg/knut'}
                type={'a'}
                darkColor={'dark:text-knut-dark-header'}
                lightColor={'text-knut-light-header'}
              >
                discord
              </CustomLink>
            </div>
            <div className="text-center">
              Feedback, issues or questions? Contact <strong>Bitsnoxx#1337</strong> on Discord.
            </div>
          </Important>
        </div>
      </article>
    </PageLayout>
  );
};

export default Home;
