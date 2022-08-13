import Image from 'next/image';

import React, { useCallback, useEffect, useState } from 'react';

import PageLayout from 'components/layout/PageLayout';
import { baseUrl } from 'content/links';
import { participants, StreamerInfoType } from 'content/streamers';
import { seo } from 'content/text';
import { OpenGraph } from 'model/opengraph';
import {
  getUsersVote,
  insertVoteForUser,
  signInTwitch,
  signOutTwitch,
  supabase,
  updateVoteForUser,
} from 'utils/supabaseClient';

import clsx from 'clsx';
import { User } from '@supabase/supabase-js';

const streamers = participants.find((e) => e.category === 'streamers')?.members;

export default function Vote() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [vote, setVote] = useState<string | null | undefined>(null);
  const [previousVote, setPreviousVote] = useState<string>();
  const [hasVoted, setHasVoted] = useState(false);

  const submitVote = useCallback(async () => {
    if (!user || !vote) {
      return;
    }

    setPreviousVote(vote);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    if (hasVoted) {
      // TODO: handle errors
      updateVoteForUser(user.id, vote);
      return;
    }

    // TODO: handle errors
    const data = await insertVoteForUser(user.id, vote);

    setHasVoted(true);
  }, [vote, user, hasVoted]);

  const hasUserVoted = useCallback(async (userId: User['id']) => {
    // TODO: handle errors
    const data = await getUsersVote(userId);

    setHasVoted(!!data?.length);
    if (data?.length) {
      setVote(data[0].vote);
      setPreviousVote(data[0].vote);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const session = supabase.auth.session();
    const user = session?.user ?? null;
    setUser(user);

    if (user) {
      hasUserVoted(user.id);
    } else {
      setIsLoading(false);
    }

    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      const newUser = session?.user ?? null;

      if (newUser) {
        setIsLoading(true);
        setUser(newUser);
        hasUserVoted(newUser.id);
        return;
      }

      setUser(null);
      setVote(null);
    });

    return () => {
      listener?.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const og: OpenGraph = {
    site_name: seo.title,
    title: 'Vote - ' + seo.title,
    description: 'Vote for the streamer you think has performed the best at Camp Knut',
    url: baseUrl + '/vote',
  };

  const Streamer = (streamer: StreamerInfoType) => {
    const { twitchName, name } = streamer;
    const selected = vote === twitchName;

    const wrapperClassName = clsx('rounded-xl p-3 text-center transition duration-300', {
      ['bg-knut-light-bg-info dark:bg-knut-dark-bg-info']: !selected,
      ['bg-knut-dark-bg-info dark:bg-knut-light-bg-info']: selected,
    });

    const Text = () => (
      <>
        <h2
          className={clsx('text-2xl pb-2 font-black', {
            ['text-black dark:text-white']: !selected,
            ['text-white dark:text-black']: selected,
          })}
        >
          {name}
        </h2>
        <section className="container mx-auto flex justify-center">
          <Image
            src={`/participants/${twitchName}.webp`}
            className="mx-auto rounded-md"
            height={250}
            width={250}
            objectFit="cover"
            alt={name}
          />
        </section>
      </>
    );

    if (!user) {
      return (
        <div className={wrapperClassName}>
          <Text />
        </div>
      );
    }

    return (
      <button type="button" onClick={() => setVote(twitchName)} className={wrapperClassName}>
        <Text />
      </button>
    );
  };

  return (
    <PageLayout openGraph={og}>
      <article>
        {isLoading && (
          <div role="status" className="mx-auto h-14 w-14">
            <svg
              aria-hidden="true"
              className="mr-2 h-full w-full animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {!isLoading && (
          <>
            <h1 className="text-3xl mt-5 mb-4 mr-4 text-center font-black text-knut-light-header dark:text-knut-dark-header">
              Who do you think will perform the best{user ? `, ${user.user_metadata.nickname}` : ''}
              {user && (
                <span className="ml-4 inline-flex items-center justify-center">
                  <Image
                    src={user?.user_metadata.picture}
                    alt="Camp Knut"
                    width={64}
                    height={64}
                    priority={true}
                    decoding="async"
                    className="inline-block aspect-auto"
                  />
                </span>
              )}
            </h1>
            {!user && <h2 className="text-center">You need to login to vote</h2>}
            {user && hasVoted && (
              <h2 className="text-center">
                You have voted for{' '}
                <strong>
                  <em>{streamers?.find((s) => s.twitchName === previousVote)?.name}</em>
                </strong>
                . You can change your vote below.
              </h2>
            )}
            {user ? (
              <div className="mt-5 mb-4 mr-4 text-center font-bold">
                <button
                  onClick={() => signOutTwitch()}
                  className="text-2xl rounded-xl bg-knut-other-twitch p-2.5 text-center text-knut-dark-header"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="text-3xl mt-5 mb-4 mr-4 text-center font-bold">
                <button
                  onClick={() => signInTwitch()}
                  className="text-2xl rounded-xl bg-knut-other-twitch p-2.5 text-center text-knut-dark-header"
                >
                  Sign in
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
              {streamers?.map((props) => (
                <Streamer key={props.name} {...props} />
              ))}
            </div>

            {user && (
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={submitVote}
                  className={clsx(' rounded py-3 px-6 font-bold', {
                    'cursor-not-allowed bg-gray-300 text-gray-500': !!!vote,
                    'bg-knut-dark-tag text-white': !!vote,
                  })}
                  disabled={!!!vote}
                >
                  Vote
                </button>
              </div>
            )}
          </>
        )}
      </article>
    </PageLayout>
  );
}
