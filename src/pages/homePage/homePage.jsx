import React from 'react';
import { Header } from '../../layout/header';
import { HomeContent } from '../../components/homeContent';
import Container from './homePage.styled';

const HomePage = () => (
  <Container>
    <Header />
    <HomeContent />
  </Container>
);

export default HomePage;
