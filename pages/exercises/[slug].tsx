import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { IExerciseFields } from "../../model/contentful";
import { IExercise } from "../../model/exercise";
import { getAllExercises, getExercise } from "../../utils/cms";
import { getExercises, getOneExercise } from "../../utils/contentful";
import { mapToExerciseType } from "../../utils/mappers";

export default function ExercisePage({
  exerciseElement,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { imageUrl, name, tags, youtubeLink } = exerciseElement;
  return (
    <div>
      <h1 className="text-3xl font-bold">{name}</h1>
      <div className="flex flex-col md:flex-row gap-16 my-16">
        <div className="col-span-2 relative w-full aspect-video">
          <Image src={imageUrl} layout="fill" alt={name} objectFit="cover" />
        </div>
        <div>
          <h2 className="text-2xl font-medium">Tags:</h2>
          <p>{tags.join(", ")}</p>
          <h2 className="text-2xl font-medium">Youtube link:</h2>
          <a target="_blank" rel="noreferrer" href={youtubeLink}>
            {youtubeLink}
          </a>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{exerciseElement: IExercise}> = async ({ params }) => {
  const exerciseElement = await getOneExercise(params?.slug);
  return { props: { exerciseElement: mapToExerciseType(exerciseElement) } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const exercises = await getExercises()
  const allExercisePaths = exercises.items?.map(exercise => `/exercises/${exercise.fields.slug}`) ?? []
  return {
    paths: allExercisePaths,
    fallback: false,
  };
};
