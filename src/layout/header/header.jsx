import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import DiscordLogoWhite from '../../assets/logos/discordLogoWhite';
import LoginButton from '../../components/loginButton/loginButton';
import { StyledHeader, StyledLogo, StyledNav } from './header.styled';

const Header = () => (
  <StyledHeader>
    <Grid container spacing={3}>
      <Link to="/">
        <StyledLogo item xs={2}>
          <DiscordLogoWhite />
        </StyledLogo>
      </Link>
      <StyledNav item xs={8}>
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
      </StyledNav>

      <Link to="/login">
        <LoginButton item xs={2} />
      </Link>
    </Grid>
  </StyledHeader>
);

export default Header;
