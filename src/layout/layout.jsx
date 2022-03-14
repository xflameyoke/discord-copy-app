import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Header } from '../layout/header';
import { Footer } from '../layout/footer';

const Main = styled.main`
  margin: 0;
  padding: 0;
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequred,
};

export default Layout;
