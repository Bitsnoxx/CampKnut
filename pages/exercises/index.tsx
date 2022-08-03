import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { IExercise } from "../../model/exercise";
import { getAllExercises } from "../../utils/cms";

export default function ExerciseListPage({
  exercises,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(exercises);
  return (
    <>
      <h1>Exercises</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {exercises.map((exercise: IExercise) => (
          <Link key={exercise.slug} href={`exercises/${exercise.slug}`}>
            <div className="cursor-pointer p-2 bg-slate-200">
              <h2>{exercise.name}</h2>
              <span>{exercise.tags.join("/")}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const exercises = getAllExercises();
  return { props: { exercises } };
};
