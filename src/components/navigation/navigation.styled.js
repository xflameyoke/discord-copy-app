import styled from 'styled-components';

export default styled.nav`
  li {
    float: left;
    margin: 5px;
    list-style-type: none;
  }

  a {
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    }
  }
`;
