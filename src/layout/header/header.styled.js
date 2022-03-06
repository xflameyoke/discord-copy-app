import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0;

  svg {
    width: 150px;
    height: 100px;
  }

  li {
    float: left;
    padding: 10px;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;
