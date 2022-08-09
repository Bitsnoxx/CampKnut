import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

import PageLayout from "components/layout/PageLayout";
import { IWorkoutPost } from "model/contentful";
import { getWorkoutPosts } from "utils/contentful";

export default function WorkoutListPage({
  workouts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const items = workouts.items as IWorkoutPost[];
  return (
    <PageLayout>
      <div>
        <h1 className="text-3xl ">Workout Posts</h1>
        {items.map(({ fields }) => (
          <Link passHref key={fields.slug} href={`/workout/${fields.slug}`}>
            <h2 className="cursor-pointer">{fields.title}</h2>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // magic cms
  return { props: { workouts: await getWorkoutPosts() } };
};
