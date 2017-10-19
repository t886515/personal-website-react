import React from 'react';
import titleName from '../images/titlenamesh.png';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
          <div style={{textAlign: 'center'}}>
            <img src={titleName}/>
            <Link to="/about">About</Link>
            <Link to="/resume">
          </div>
      </div>
    );
  }
}

export default withRouter(Home);

