import React from 'react';
import styled from 'styled-components';
import Container from './container';

const FooterWrapper = styled.footer`
  margin-top: auto;
  background-color: #090a0b;
`;

const FooterContent = styled.p`
  display: flex;
  min-height: 70px;
  margin: 0;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #fff;
  text-transform: uppercase;
`;

export default function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>Footer</FooterContent>
      </Container>
    </FooterWrapper>
  );
}
