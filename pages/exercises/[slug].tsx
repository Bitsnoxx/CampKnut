import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { IExercise } from "../../model/exercise";
import { getAllExercises, getExercise } from "../../utils/cms";

export default function ExercisePage({
  exerciseElement,
}: {
  exerciseElement: IExercise;
}) {
  console.log(exerciseElement);
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // magic cms
  const exerciseElement = getExercise(params?.slug);

  return { props: { exerciseElement } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllExercises().map(({ slug }) => `/exercises/${slug}`) ?? [],
    fallback: false,
  };
};
