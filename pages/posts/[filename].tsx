// THIS FILE HAS BEEN GENERATED WITH THE TINA CLI.
// This is a demo file once you have tina setup feel free to delete this file

import { Container } from "@mantine/core";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { ScriptProps } from "next/script";
import { useTina } from "tinacms/dist/edit-state";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../.tina/__generated__/client";
import { components } from "../../components/mdxStyling";

interface PageProps extends ScriptProps {
  data: any;
  variables: { relativePath: string };
  query: string;
}

const BlogPage = (props: PageProps) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return <TinaMarkdown components={components} content={data.post.body} />;
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params!.filename}.mdx` };
  try {
    const res = await client.queries.post(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
      //myOtherProp: 'some-other-data',
    },
  };
};

export const getStaticPaths = async () => {
  const postsListData = await client.queries.postConnection();

  return {
    paths: postsListData.data.postConnection.edges!.map((post: any) => ({
      params: { filename: post!.node!._sys.filename },
    })),
    fallback: false,
  };
};

export default BlogPage;
