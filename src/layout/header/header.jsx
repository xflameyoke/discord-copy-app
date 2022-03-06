import React from 'react';
import DiscordLogoBlack from '../../assets/logos/discordLogoBlack';
import LoginButton from '../../components/loginButton/loginButton';
import Container from './header.styled';

const Header = () => (
  <Container>
    <DiscordLogoBlack />
    <ul>
      <li>Download</li>
      <li>Nitro</li>
      <li>Safety</li>
      <li>Support</li>
      <li>Blog</li>
      <li>Careers</li>
    </ul>
    <LoginButton />
  </Container>
);

export default Header;
