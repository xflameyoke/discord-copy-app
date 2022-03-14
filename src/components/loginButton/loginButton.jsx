import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton, StyledText, Wrapper } from './loginButton.styled';

const LoginButton = () => (
  <Wrapper>
    <StyledButton>
      <StyledText>
        <Link to="/login">Login</Link>
      </StyledText>
    </StyledButton>
  </Wrapper>
);

export default LoginButton;
