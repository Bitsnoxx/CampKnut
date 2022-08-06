import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { IExercise } from "../../model/exercise";
import { getExercises, getOneExercise } from "../../utils/contentful";
import CustomLink from "../../components/ui/CustomLink";
import PageLayout from "../../components/layout/PageLayout";

export default function ExercisePage({
  exerciseElement,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { imageUrl, name, tags, youtubeLink } = exerciseElement;

  return (
    <PageLayout>
      <div>
        <h1 className="text-3xl font-bold dark:text-knut-dark-text light:text-knut-light-text">
          {name}
        </h1>
        <div className="flex flex-col md:flex-row gap-16 my-16">
          <div className="col-span-2 relative w-full aspect-video">
            <Image src={imageUrl} layout="fill" alt={name} objectFit="cover" />
          </div>
          <div>
            <h2 className="text-2xl font-medium dark:text-knut-dark-header light:text-knut-light-header pb-4">
              Muscle groups:
            </h2>
            <p className="light:text-knut-light-header dark:text-knut-dark-header hover:font-black">
              {tags?.map((e) => (
                <span
                  key={e}
                  className="dark:bg-knut-dark-tag bg-sky-200 p-1 rounded-xl px-3 mr-2"
                >
                  <CustomLink href={`/exercises/${e}`} type="a">
                    {e}
                  </CustomLink>
                </span>
              ))}
            </p>
            <h2 className="text-2xl font-medium dark:text-knut-dark-header light:text-knut-light-header pt-10">
              Youtube link:
            </h2>
            <a
              target="_blank"
              rel="noreferrer"
              className="light:text-knut-light-header dark:text-knut-dark-header hover:font-black"
              href={youtubeLink}
            >
              {youtubeLink}
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps<{
  exerciseElement: IExercise;
}> = async ({ params }) => {
  const exerciseElement = await getOneExercise(params?.slug);
  return {
    props: {
      exerciseElement: {
        ...exerciseElement.fields,
        imageUrl: `https:${exerciseElement.fields.image.fields.file.url}`,
        tags: exerciseElement.fields.tags ?? [],
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const exercises = await getExercises();
  const allExercisePaths =
    exercises.items?.map((exercise) => `/exercises/${exercise.fields.slug}`) ??
    [];
  return {
    paths: allExercisePaths,
    fallback: false,
  };
};
