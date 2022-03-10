import React from 'react';
import { Link } from 'react-router-dom';
import DiscordLogoWhite from '../../assets/logos/discordLogoWhite';
import LoginButton from '../../components/loginButton/loginButton';
import { Navigation } from '../../components/navigation/';
import { StyledHeader, StyledLogo } from './header.styled';

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <StyledLogo>
        <DiscordLogoWhite />
      </StyledLogo>
    </Link>
    <Navigation />
    <Link to="/login">
      <LoginButton />
    </Link>
  </StyledHeader>
);

export default Header;
