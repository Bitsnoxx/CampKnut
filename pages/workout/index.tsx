import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageLayout from 'components/layout/PageLayout';
import { IWorkoutPost } from 'model/contentful';
import { getWorkoutPosts } from 'utils/contentful';
import {OpenGraph} from "../../model/opengraph";
import {seo} from "../../content/text";
import {baseUrl} from "../../content/links";

export default function WorkoutListPage({
  workouts,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  const items = workouts.items as IWorkoutPost[];
  let og:OpenGraph = {
    site_name: seo.title,
    title: "Workout - " + seo.title,
    description: "Workout plan for Camp Knut",
    url: baseUrl + "/workout",
  }

  return (
      <PageLayout widthClassName="max-w-none" openGraph={og}>
      <div className="mx-auto w-11/12">
        <div className="pb-6">
          <h1 className=" pb-5 font-bold">Workout Posts</h1>
          <div className="flex w-full max-w-2xl flex-row items-center gap-4">
            <div className="relative w-full">
              <div
                className="grid auto-rows-max gap-4"
                style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))' }}
              >
                {items.map(({ fields }) => (
                  <div key={fields.slug}>
                    <Image src="/knutReady.webp" alt="Workout" width={64} height={64} />
                    <Link passHref key={fields.slug} href={`/workout/${fields.slug}`}>
                      <h2 className="cursor-pointer">{fields.title}</h2>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // magic cms
  return { props: { workouts: await getWorkoutPosts() } };
};
