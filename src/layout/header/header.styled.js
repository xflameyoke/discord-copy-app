import styled from 'styled-components';

export const StyledHeader = styled.header`
  box-sizing: content-box;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10%;
  margin-right: auto;

  svg {
    width: 120px;
    height: 100px;
  }
`;
