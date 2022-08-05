import { GetStaticProps } from "next";
import { IWorkoutPostFields } from "../../model/contentful";
import { getWorkoutPosts, getOneWorkoutPost } from "../../utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import renderOptions from "../../components/richTextStyling";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

export default function WorkoutPage({
  post: { text, title },
}: {
  post: IWorkoutPostFields;
}) {
  return (
    <article className=" w-full">
      <h1 className="text-3xl mb-8 font-black light:text-knut-light-header dark:text-knut-dark-header text-center mt-2.5 pb-8">
        {title}
      </h1>
      <div className="lg:prose-lg xl:prose-xl font-black light:text-knut-light-header dark:text-knut-dark-header">
        {documentToReactComponents(text, renderOptions)}
      </div>
    </article>
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
