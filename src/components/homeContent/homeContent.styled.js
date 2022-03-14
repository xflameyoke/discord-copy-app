import styled from 'styled-components';
import Background from '../../assets/backgrounds/discordHeader.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 650px;
`;

export const HeroBg = styled.div`
  height: 87vh;
  width: 100%;
  position: relative;
  top: -80px;
  left: 0;
  background-image: url(${Background});
`;
