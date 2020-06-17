import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import PageTitle from '../../components/pageTitle';
import Form from '../../components/form/form';
import Popup from '../../components/popup';

export default function NewArticle(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>FE Articles | New Article</title>
      </Head>
      <PageTitle>New FE Article</PageTitle>
      <Form />
      <Popup />
    </Layout>
  );
}
