import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Article } from '../types';

const ArticleListItem = styled.li`
  padding: 3px 0;

  a {
    font-size: 22px;
    text-transform: capitalize;
    transition: color 0.2s;

    @media (max-width: 425px) {
      font-size: 20px;
    }

    &:link,
    &:visited {
      color: #090a0b;
    }

    &:hover,
    &:active {
      color: orangered;
    }
  }
`;

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList(props: ArticleListProps): JSX.Element {
  const { articles } = props;

  return (
    <ul>
      {articles.map((article: Article) => {
        return (
          <ArticleListItem key={article.article_id}>
            <Link href="articles/[articleId]" as={`/articles/${article.article_id}`}>
              <a>{article.title}</a>
            </Link>
          </ArticleListItem>
        );
      })}
    </ul>
  );
}
