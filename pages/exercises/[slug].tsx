import PageLayout from 'components/layout/PageLayout';
import {baseUrl, placeHolderImage} from 'content/links';
import { IUIExercise } from 'model/ui';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { getExercises, getOneExercise } from 'utils/contentful';
import { OpenGraph } from "model/opengraph";
import { seo } from "content/text";

export default function ExercisePage({
  exerciseElement,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { name, tags, youtubeLink } = exerciseElement;

  const newUrl = new URL(youtubeLink);
  const videoId = newUrl.pathname.substring(1);
  const timestamp = newUrl.searchParams.get('t');

  const og:OpenGraph = {
    site_name: seo.title,
    title: name + " - "+  seo.title,
    description: "An overview of exercises done during Camp Knut.",
    type: "video.other",
    url: baseUrl + "/exercises",
    // TODO: change url to individual slug
  }

  return (
      <PageLayout openGraph={og}>
      <div>
        <h1 className="text-3xl font-bold text-knut-light-text dark:text-knut-dark-text">{name}</h1>
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
          <h2 className="text-2xl pb-4 font-medium text-knut-light-header dark:text-knut-dark-header">
            Muscle groups:
          </h2>
          <p className="text-knut-light-header dark:text-knut-dark-header">
            {tags?.map((e) => (
              <span key={e} className="mr-2 rounded-xl bg-sky-200 p-1 px-3 dark:bg-knut-dark-tag">
                {e}
              </span>
            ))}
          </p>
          <h2 className="text-2xl pt-5 font-medium text-knut-light-header dark:text-knut-dark-header">
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
    exercises.items?.map((exercise) => `/exercises/${exercise.fields.slug}`) ?? [];
  return {
    paths: allExercisePaths,
    fallback: false,
  };
};
