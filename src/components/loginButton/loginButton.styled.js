import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 10%;
`;

export const StyledButton = styled.button`
  height: 24px;
  padding: 15px;
  border: none;
  border-radius: 40px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const StyledText = styled.p`
  font-size: 14px;
`;
