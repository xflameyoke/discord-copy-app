import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  a {
    text-decoration: none;
  }
`;

export const StyledNav = styled.nav`
  li {
    float: left;
    margin: 20px;
    list-style-type: none;
  }

  a {
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    }
  }
`;

export const StyledLogo = styled.div`
  svg {
    width: 120px;
    height: 100px;
  }
`;
