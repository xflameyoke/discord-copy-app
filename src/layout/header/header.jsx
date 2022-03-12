import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import DiscordLogoWhite from '../../assets/logos/discordLogoWhite';
import LoginButton from '../../components/loginButton/loginButton';
import { Navigation } from '../../components/navigation/';
import { StyledHeader, StyledLogo } from './header.styled';

const Header = () => (
  <StyledHeader>
    <Grid container>
      <StyledLogo item>
        <Link to="/">
          <DiscordLogoWhite />
        </Link>
      </StyledLogo>
      <Navigation item />
      <LoginButton item />
    </Grid>
  </StyledHeader>
);

export default Header;
