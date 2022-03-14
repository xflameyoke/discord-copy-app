import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav, Wrapper } from './navigation.styled';

const Navigation = () => (
  <Wrapper>
    <StyledNav>
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
  </Wrapper>
);

export default Navigation;
