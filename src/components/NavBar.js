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

const InitialLinkWrapper = style.div`

  font-family: 'Dancing Script', cursive;
  margin: 15px 20px;
  color: ${colors.grey4};
  font-size: 1.5rem;

`;

const HomeNavLinks = style(FlexWrapper)`
  justify-content: center;
  align-items: center;
  margin: 15px 20px;
  color: ${colors.grey4}

  & > *:not(:first-child) {
    margin-left: 10px;
  }
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const IconLink = style(Link)`
  color: ${colors.grey4}
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
        <InitialLinkWrapper>♡ L . Y .</InitialLinkWrapper>
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
