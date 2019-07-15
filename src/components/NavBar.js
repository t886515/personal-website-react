import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import style from 'styled-components';
import { colors, FlexWrapper } from '../share-style/share-styles';

const NavBarWrapper = style.header`
  position: absolute;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 5;
  color: ${colors.grey1}
  `;

const InitialLinkWrapper = style(Link)`
  font-family: 'Dancing Script', cursive;
  margin: 20px 20px;
  color: ${colors.grey4};
  font-size: 2.0rem;
  text-decoration: none;
`;

const HomeNavLinks = style(FlexWrapper)`
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  color: ${colors.grey4}

  & > * {
    margin-right: 20px;
  }
`;

const IconLink = style(Link)`
  color: ${colors.grey4};
  text-decoration: none;
  font-family: 'Economica',sans-serif;
  text-transform: uppercase;
  font-size: 1.4em;
  letter-spacing: 1px;
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <NavBarWrapper>
        <InitialLinkWrapper to="/">♡ L . Y .</InitialLinkWrapper>
        <HomeNavLinks>
          <IconLink to="/about">Resume</IconLink>
          <IconLink to="/journal">Journal</IconLink>
          <IconLink to="/contact">Contact Me</IconLink>
        </HomeNavLinks>
      </NavBarWrapper>
    );
  }
}

export default withRouter(NavBar);
