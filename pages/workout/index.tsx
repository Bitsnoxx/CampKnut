import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { IWorkoutData } from "../../model/workout";
import { getWorkouts } from "../../utils/cms";

export default function WorkoutListPage({
  workouts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1 className="text-3xl">Workout Posts</h1>
      {workouts.map((workout: IWorkoutData) => (
        <Link
          passHref
          key={workout.filename}
          href={`/workout/${workout.filename}`}
        >
          <h2 className="cursor-pointer">{workout.title}</h2>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // magic cms
  const workouts = getWorkouts();
  return { props: { workouts } };
};
