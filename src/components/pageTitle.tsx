import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 56px;
  color: #090a0b;
  text-transform: capitalize;
`;

interface PageTitleProps {
  children: React.ReactNode;
}

export default function PageTitle(props: PageTitleProps): JSX.Element {
  const { children } = props;

  return <Title>{children}</Title>;
}
