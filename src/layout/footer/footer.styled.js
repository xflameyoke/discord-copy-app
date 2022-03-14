import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.darkgrey};
`;
