import React from 'react';
import Link from 'next/link';
import { createGlobalStyle } from 'styled-components';
import Wrapper from './common/wrapper';
import Container from './common/container';
import Header from './common/header';
import Nav from './common/nav';
import Footer from './common/footer';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: sans-serif;
    background-image: url("/images/bg.jpg");
  }

  main {
    padding: 0 15px 30px;
  }

  a {
    text-decoration: none;
  }

  ul {
    padding-left: 0;
    list-style: none;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;

  return (
    <Wrapper>
      <GlobalStyle />
      <Header>
        <Container>
          <Nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/articles/new">
              <a>Create Article</a>
            </Link>
          </Nav>
        </Container>
      </Header>

      <main>
        <Container>{children}</Container>
      </main>

      <Footer />
    </Wrapper>
  );
}
