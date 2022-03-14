import React from 'react';
import { Container } from './homeText.styled';
import PropTypes from 'prop-types';

const HomeText = (props) => (
  <Container>
    <h1>{props.header}</h1>
    <p>{props.text}</p>
  </Container>
);

HomeText.propTypes = {
  props: PropTypes.node.isRequired,
  text: PropTypes.string,
  header: PropTypes.string,
};

export default HomeText;
