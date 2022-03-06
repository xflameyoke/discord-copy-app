import React from 'react';
import { Link } from 'react-router-dom';
import DiscordLogoWhite from '../../assets/logos/discordLogoWhite';
import LoginButton from '../../components/loginButton/loginButton';
import Container from './header.styled';

const Header = () => (
  <Container>
    <Link to="/">
      <DiscordLogoWhite />
    </Link>
    <ul>
      <li>
        <Link to="/download">Download</Link>
      </li>
      <li>
        <Link to="/nitro">Nitro</Link>
      </li>
      <li>
        <Link to="safety">Safety</Link>
      </li>
      <li>
        <Link to="/support">Support</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/careers">Careers</Link>
      </li>
    </ul>
    <Link to="/login">
      <LoginButton />
    </Link>
  </Container>
);

export default Header;
