import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { useState } from "react";
import ExercisePreview from "../../components/exercise/ExercisePreview";
import { IExerciseFields } from "../../model/contentful";
import { getExercises } from "../../utils/contentful";
import slugify from "../../utils/slugify";

export default function ExerciseListPage({
  exercises,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [visibleExercises, setVisibleExercises] =
    useState<IExerciseFields[]>(exercises);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterLogic = (e: IExerciseFields) => {
    const term = slugify(searchTerm.toLowerCase());
    const name = slugify(e.name.toLowerCase());
    const t = e.tags?.map((e) => slugify(e.toLowerCase()));
    return name.includes(term) || (t && t.some((x) => x.includes(term)));
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
        {visibleExercises
          .filter(filterLogic)
          .map((exercise: IExerciseFields) => (
            <ExercisePreview key={exercise.slug} {...exercise} />
          ))}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  exercises: IExerciseFields[];
}> = async () => {
  const exercises = await getExercises();
  return {
    props: {
      exercises: exercises.items.map(({ fields }) => {
        return {
          ...fields,
          tags: fields.tags ?? [],
        };
      }),
    },
    revalidate: 600,
  };
};
