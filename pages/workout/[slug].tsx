import { GetStaticProps } from "next";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PageLayout from "components/layout/PageLayout";
import renderOptions from "components/richTextStyling";
import { IWorkoutPostFields } from "model/contentful";
import { getOneWorkoutPost, getWorkoutPosts } from "utils/contentful";

export default function WorkoutPage({
  post: { text, title },
}: {
  post: IWorkoutPostFields;
}) {
  return (
    <PageLayout>
      <article className=" w-full">
        <h1 className="mb-8 mt-2.5 pb-8 text-center text-3xl font-black text-knut-light-header dark:text-knut-dark-header">
          {title}
        </h1>
        <div className="text-knut-light-header dark:text-knut-dark-header lg:prose-lg xl:prose-xl">
          {documentToReactComponents(text, renderOptions)}
        </div>
      </article>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getOneWorkoutPost(params?.slug);

  return {
    props: {
      post: post.fields,
    },
  };
};

export const getStaticPaths = async () => {
  const allPosts = await getWorkoutPosts();
  return {
    paths:
      allPosts.items.map(({ fields: { slug } }) => `/workout/${slug}`) ?? [],
    fallback: false,
  };
};
