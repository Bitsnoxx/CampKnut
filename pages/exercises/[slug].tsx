import { GetStaticPaths, GetStaticProps } from "next";
import { IExercise } from "../../model/exercise";
import { getAllExercises, getExercise } from "../../utils/cms";

export default function ExercisePage({
  exerciseElement,
}: {
  exerciseElement: IExercise;
}) {
  console.log(exerciseElement);
  const { imageUrl, name, slug, tags, youtubeLink } = exerciseElement;
  return (
    <div>
      <h1>{name}</h1>
      <p>{slug}</p>
      <p>{tags.join("/")}</p>
      <a target="_blank" rel="noreferrer" href="{youtubeLink}">
        {youtubeLink}
      </a>
      {/* <Image src={imageUrl} /> */}
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
