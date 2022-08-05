import { GetStaticProps } from "next";
import { IWorkoutPostFields } from "../../model/contentful";
import { getWorkoutPosts, getOneWorkoutPost } from "../../utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import renderOptions from "../../components/richTextStyling";

export default function WorkoutPage({
  post: { text, title },
}: {
  post: IWorkoutPostFields;
}) {
  return (
    <article className=" w-full">
      <h1 className="text-3xl mb-8 font-black">{title}</h1>
      <div className="prose lg:prose-lg xl:prose-xl">
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
