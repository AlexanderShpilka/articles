import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import SingleArticle from '../../components/singleArticle';
import { articles } from '../../apis/articles';
import { Article as IArticle } from '../../types';

interface ArticleProps {
  article: IArticle;
}

export default function Article({ article }: ArticleProps): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>FE Articles | {article.title}</title>
      </Head>
      <SingleArticle article={article} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { articleId } = context.params;

  const response = await articles.get<IArticle>(`/articles/${articleId}`);

  return {
    props: {
      article: response.data,
    },
  };
};
