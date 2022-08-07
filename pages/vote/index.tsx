import Image from "next/image";
import { participants } from "../../content/streamers";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import {supabase, signInTwitch, signOutTwitch} from "../../utils/supabaseClient";
const session = supabase.auth.session();

export default function Vote() {
  const streamers = participants.find((e) => e.category === "streamers");
  const session = supabase.auth.session();

  return (
    <PageLayout>
      <article>
        {session ? (
          <>
            <h1 className="text-3xl mb-4 mt-5 text-center mr-4 font-black light:text-knut-light-header dark:text-knut-dark-header">
              Vote on your favourite streamer{" "}
              {session?.user?.user_metadata.nickname}
              <span className="pl-4">
                <Image
                  src={session?.user?.user_metadata.picture}
                  alt="Camp Knut"
                  width={64}
                  height={64}
                  priority={true}
                  decoding="async"
                  className="aspect-auto"
                ></Image>
              </span>
            </h1>
              <div className="text-3xl mb-4 font-bold mt-5 text-center mr-4">
                  <button
                      onClick={() => signOutTwitch()}
                      className="text-2xl text-center bg:bg-other-twitch rounded-xl py-2.5 px-2.5 bg-knut-other-twitch text-knut-dark-header"
                  >
                      Sign Out
                  </button>
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {streamers?.members.map((e) => (
                <div
                  key={e.name}
                  className="cursor-pointer rounded-xl p-3 bg-knut-light-bg-info dark:bg-knut-dark-bg-info hover:bg-knut-light-bg hover:dark:bg-knut-dark-bg transition duration-300"
                >
                  <div
                    key={e.name}
                    className=" overflow-hidden rounded-xl bg-knut-light-bg-info dark:bg-knut-dark-bg-info hover:bg-knut-light-bg hover:dark:bg-knut-dark-bg transition duration-300"
                  >
                    <span
                      key={e.name}
                      className="text-center text-2xl font-black light:text-knut-light-header dark:text-knut-dark-header"
                    >
                      <h3 className="pb-2">{e.name}</h3>
                      <section className="hero container mx-auto flex justify-center">
                        <Image
                          src={`/participants/${e.twitchName}.webp`}
                          className="mx-auto rounded-md"
                          height={250}
                          width={250}
                          alt={e.name}
                        ></Image>
                      </section>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div>
              <h1 className="text-3xl mb-4 font-bold mt-5 text-center mr-4 light:text-knut-light-header dark:text-knut-dark-header">
                {" "}
                You need to login to vote
              </h1>

              <section className="hero container mx-auto flex justify-center">
                <Image
                  src={`/HUHH.webp`}
                  className="mx-auto"
                  height={128}
                  width={128}
                  alt="HUHH"
                ></Image>
              </section>

              <div className="text-3xl mb-4 font-bold mt-5 text-center mr-4">
                <button
                  onClick={() => signInTwitch()}
                  className="text-2xl text-center bg:bg-other-twitch rounded-xl py-2.5 px-2.5 bg-knut-other-twitch text-knut-dark-header"
                >
                  Sign in
                </button>
              </div>
            </div>
          </>
        )}
      </article>
    </PageLayout>
  );
}
