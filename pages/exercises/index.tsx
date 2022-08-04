import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useState } from "react";
import ExercisePreview from "../../components/exercise/ExercisePreview";
import { IExercise } from "../../model/exercise";
import { getAllExercises } from "../../utils/cms";
import slugify from "../../utils/slugify";

export default function ExerciseListPage({
  exercises,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [visibleExercises, setVisibleExercises] =
    useState<IExercise[]>(exercises);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterLogic = (e: IExercise) => {
    const term = slugify(searchTerm.toLowerCase());
    const name = slugify(e.name.toLowerCase());
    const t = e.tags.map((e) => slugify(e.toLowerCase()));
    return name.includes(term) || t.some((x) => x.includes(term));
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Exercises</h1>
      <div>
        <input
          className="px-4 py-1 w-full text-knut-light-text rounded-sm  my-4 border-black border-2"
          type={"text"}
          value={searchTerm}
          placeholder={"zinc exercise"}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid auto-rows-max gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {visibleExercises.filter(filterLogic).map((exercise: IExercise) => (
          <ExercisePreview key={exercise.slug} {...exercise} />
        ))}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const exercises = getAllExercises();
  return { props: { exercises } };
};
