import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import PageLayout from 'components/layout/PageLayout';
import { baseUrl } from 'content/links';
import { seo } from 'content/text';
import { IWorkoutPost } from 'model/contentful';
import { OpenGraph } from 'model/opengraph';
import { getWorkoutPosts } from 'utils/contentful';

export default function WorkoutListPage({
  workouts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const items = workouts.items as IWorkoutPost[];
  const og: OpenGraph = {
    site_name: seo.title,
    title: 'Workout - ' + seo.title,
    description: 'Workout plan for Camp Knut',
    url: baseUrl + '/workout',
  };

  return (
    <PageLayout widthClassName="max-w-none" openGraph={og}>
      <div className="mx-auto w-11/12">
        <h1 className="text-3xl pb-5 font-bold">Workout Posts</h1>
        <div
          className="grid auto-rows-max gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
          }}
        >
          {items.map(({ fields }) => (
            <div key={fields.slug}>
              <Image
                src="/knutReady.webp"
                alt="Workout"
                width={300}
                height={180}
                className="margin-auto flex content-center	"
              />
              <Link passHref key={fields.slug} href={`/workout/${fields.slug}`}>
                <h2 className="cursor-pointer">{fields.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // magic cms
  return { props: { workouts: await getWorkoutPosts() } };
};
