import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;

  a {
    display: flex;
    height: 70px;
    align-items: center;
    padding: 0 15px;
    color: #fff;
    verticla-align: middle;
    transition: color 0.2s;

    &:hover {
      color: orangered;
    }
  }
`;

export default Nav;
