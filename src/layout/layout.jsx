import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Main = styled.main`
  margin: 0;
  padding: 0;
`;

const Layout = ({ children }) => <Main>{children}</Main>;

Layout.propTypes = {
  children: PropTypes.node.isRequred,
};

export default Layout;
