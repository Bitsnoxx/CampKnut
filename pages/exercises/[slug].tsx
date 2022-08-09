import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { getExercises, getOneExercise } from "utils/contentful";
import CustomLink from "components/ui/CustomLink";
import PageLayout from "components/layout/PageLayout";
import { placeHolderImage } from "content/links";
import { IUIExercise } from "model/ui";

export default function ExercisePage({
  exerciseElement,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { image, name, tags, youtubeLink } = exerciseElement;

  /*   let embedLink = youtubeLink.split("/");
  console.log(embedLink[3]); */
  console.log(youtubeLink);

  const newUrl = new URL(youtubeLink);
  const videoId = newUrl.pathname.substring(1);
  const timestamp = newUrl.searchParams.get("t");

  console.log(timestamp);

  let id = "ZGpesmRXeB4";

  return (
    <PageLayout>
      <div>
        <h1 className="text-3xl font-bold text-knut-light-text dark:text-knut-dark-text">
          {name}
        </h1>
        <div className="mt-5 flex flex-col gap-16 md:flex-row">
          <div className="relative col-span-2 aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?start=${timestamp}`}
              title={name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mx-auto mt-10 mb-5"
            ></iframe>
          </div>
        </div>
        <div>
          <h2 className="pb-4 text-2xl font-medium text-knut-light-header dark:text-knut-dark-header">
            Muscle groups:
          </h2>
          <p className="text-knut-light-header hover:font-black dark:text-knut-dark-header">
            {tags?.map((e) => (
              <span
                key={e}
                className="mr-2 rounded-xl bg-sky-200 p-1 px-3 dark:bg-knut-dark-tag"
              >
                <CustomLink href={`/exercises/${e}`} type="a">
                  {e}
                </CustomLink>
              </span>
            ))}
          </p>
          <h2 className="pt-5 text-2xl font-medium text-knut-light-header dark:text-knut-dark-header">
            Youtube link:
          </h2>
          <a
            target="_blank"
            rel="noreferrer"
            className="text-knut-light-header hover:font-black dark:text-knut-dark-header"
            href={youtubeLink}
          >
            {youtubeLink}
          </a>
        </div>
      </div>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps<{
  exerciseElement: IUIExercise;
}> = async ({ params }) => {
  const exerciseElement = await getOneExercise(params?.slug);
  return {
    props: {
      exerciseElement: {
        ...exerciseElement.fields,
        image: exerciseElement.fields.image.fields.file
          ? `https:${exerciseElement.fields.image.fields.file.url}`
          : placeHolderImage,
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
