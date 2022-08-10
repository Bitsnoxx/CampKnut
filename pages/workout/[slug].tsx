import { GetStaticProps } from 'next';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PageLayout from 'components/layout/PageLayout';
import renderOptions from 'components/richTextStyling';
import { IWorkoutPostFields } from 'model/contentful';
import { getOneWorkoutPost, getWorkoutPosts } from 'utils/contentful';
import {OpenGraph} from "../../model/opengraph";
import {seo} from "../../content/text";
import {baseUrl} from "../../content/links";

export default function WorkoutPage({ post: { text, title } }: { post: IWorkoutPostFields }) {
  let og:OpenGraph = {
    site_name: seo.title,
    title:  title + " - " + seo.title,
    description: "Workout",
    url: baseUrl + "/workout",
    // cahnge  url to individual slug
  }

  return (
    <PageLayout openGraph={og}>
      <article className=" w-full">
        <h1 className="text-3xl mb-8 mt-2.5 pb-8 text-center font-black text-knut-light-header dark:text-knut-dark-header">
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
    paths: allPosts.items.map(({ fields: { slug } }) => `/workout/${slug}`) ?? [],
    fallback: false,
  };
};
