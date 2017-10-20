import React from 'react';
import titleName from '../images/titlenamesh.png';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';


class Home extends React.Component {
  render() {
    return (
      <div>
          <div className="centerDiv">
            <div className="centerName"> LINA YANG </div>
            <div className="centerTitle"> FULL-STACK DEVELOPER・UX/UI DESIGNER・WEB-DEVELOPER </div>
          <div className="navLinkGroup">
            <Link className="navlink" to="/about">About</Link>。
            <Link className="navlink" to="/resume"> Resume </Link>。
            <Link className="navlink" to="/project"> Projects </Link>。
            <Link className="navlink" to="/contact"> Contact Me </Link>
            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(Home);

