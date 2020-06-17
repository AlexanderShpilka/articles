import React from 'react';
import styled from 'styled-components';
import { Article } from '../types';
import PageTitle from './pageTitle';

const Description = styled.p`
  width: 100%;
  max-width: 500px;
  line-height: 130%;
`;

interface SingleArticleProps {
  article: Article;
}

export default function SingleArticle(props: SingleArticleProps): JSX.Element {
  const { title, description } = props.article;

  return (
    <article>
      <PageTitle>{title}</PageTitle>
      <Description>{description}</Description>
      <hr />
    </article>
  );
}
