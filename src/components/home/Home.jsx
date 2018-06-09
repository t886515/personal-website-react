import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

class Home extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={900}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className="homeDiv">
          <div className="centerDiv">
            <div className="centerName"> LINA YANG </div>
            <div className="centerTitle">
              SOFTWARE ENGINEER・FULL-STACK DEVELOPER・UI DESIGNER
            </div>
            <br />
            <div className="navLinkGroup">
              <Link className="navlink" to="/about">
                <i className="fa fa-id-card-o fa-2x" aria-hidden="true" />
              </Link>。
              <Link className="navlink" to="/resume">
                {' '}
                <i className="fa fa-file-o fa-2x" aria-hidden="true" />{' '}
              </Link>。
              <Link className="navlink" to="/journal">
                {' '}
                <i className="fa fa-wrench fa-2x" aria-hidden="true" />{' '}
              </Link>。
              <Link className="navlink" to="/contact">
                {' '}
                <i
                  className="fa fa-envelope-open-o fa-2x"
                  aria-hidden="true"
                />{' '}
              </Link>
            </div>
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default withRouter(Home);
