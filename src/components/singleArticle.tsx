import React from 'react';
import { Article } from '../types';
import PageTitle from './pageTitle';

interface SingleArticleProps {
  article: Article;
}

export default function SingleArticle(props: SingleArticleProps): JSX.Element {
  const { title, description } = props.article;

  return (
    <article>
      <PageTitle>{title}</PageTitle>
      <p>{description}</p>
      <hr />
    </article>
  );
}
