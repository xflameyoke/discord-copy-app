import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 10%;
`;

export const StyledNav = styled.nav`
  li {
    float: left;
    margin: 5px;
    list-style-type: none;
    margin-right: 30px;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    }
  }
`;
