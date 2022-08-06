import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { participants } from "../../content/streamers";
import React from "react";

const Vote = () => {
  const { data: session } = useSession();
  const streamers = participants.find((e) => e.category === "streamers");

  if (session) {
    return (
      <article>
        <div>
          <h1 className="text-3xl mb-4 mt-5 text-center mr-4 font-black light:text-knut-light-header dark:text-knut-dark-header">
            Vote on your favourite streamer, {session.user?.name}
            <span className="pl-4">
              <Image
                src={session.user?.image}
                alt="Camp Knut"
                width={64}
                height={64}
                priority={true}
                decoding="async"
                className="aspect-auto"
              />
            </span>
          </h1>

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
                        src={`/streamers/${e.twitchName}.webp`}
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
        </div>
      </article>
    );
  } else {
    return (
      <article>
        <div>
          <h1 className="text-3xl mb-4 font-bold mt-5 text-center mr-4 light:text-knut-light-header dark:text-knut-dark-header">
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
              onClick={() => signIn()}
              className="text-2xl text-center bg:bg-other-twitch rounded-xl py-2.5 px-2.5 bg-knut-other-twitch text-knut-dark-header"
            >
              Sign in
            </button>
          </div>
        </div>
      </article>
    );
  }
};

export default vote;
