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
  height: 87vh;
  width: 100%;
  position: relative;
  top: -80px;
  left: 0;
  background-image: url(${Background});
`;
