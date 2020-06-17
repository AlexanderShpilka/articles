import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import PageTitle from '../components/pageTitle';
import ArticleList from '../components/articleList';
import { articles } from '../apis/articles';
import { Article } from '../types';

interface HomeProps {
  articles: Article[];
}

export default function Home({ articles }: HomeProps): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>FE Articles | Home</title>
      </Head>
      <PageTitle>Front-end Articles</PageTitle>
      <ArticleList articles={articles} />
    </Layout>
  );
}

// Для получения постов использовал getServerSideProps.
// C той целью чтобы при отправке поста можно было вернуться на главную страницу
// и увидеть свой собственный пост. С getStaticProps этого не получилось бы.
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await articles.get<Article[]>('/articles');

  return {
    props: {
      articles: response.data,
    },
  };
};
