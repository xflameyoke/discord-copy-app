import styled from 'styled-components';
import Background from '../../assets/backgrounds/discordHeader.jpg';

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  height: 100vh;
`;

export const HeroBg = styled.div`
  width: 100vw;
  heigth: 100vh;
  background-size: cover;
  background: url(${Background});
`;
