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
        <h1 className="text-3xl font-bold dark:text-knut-dark-text light:text-knut-light-text">
          {name}
        </h1>
        <div className="flex flex-col md:flex-row gap-16 mt-5">
          <div className="col-span-2 relative w-full aspect-w-16 aspect-h-9">
            <iframe
              width="690"
              height="390"
              src={`https://www.youtube.com/embed/${videoId}?start=${timestamp}`}
              title={name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mt-10 mx-auto mb-5"
            ></iframe>
          </div>
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
          <h2 className="text-2xl font-medium dark:text-knut-dark-header light:text-knut-light-header pt-5">
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
