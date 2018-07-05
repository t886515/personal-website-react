import React, { Component} from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import { CenterDiv, H1, CenterTextAlign } from '../../styledComponents';
import { CSSTransitionGroup } from 'react-transition-group';

class About extends Component {
  render() {
    return (
      <div>
        <CenterDiv>
          <H1>About Me</H1>
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={900}
          transitionEnter={false}
          transitionLeave={false}>
        <div className="text-div">
          I’m a Full-Stack Software Engineer who loves to turn ideas into practical software.
          <br />
          I’m the type of person who emphasizes self-improvement and loves to push myself.
          <br />
          I enjoy programming. Its problem-solving, logical thinking, and ever-changing nature fascinate me!
          <br />
          I love exploring new frameworks, working to find efficient algorithms for better application performances.

          <br />
          I’m experienced in building single-page applications with Javascript.
          <br />
          Popular front-end frameworks I’ve worked with include React.js and AngularJS.
          <br />
          I’m also big fan of MERN stack, and I'm experienced in developing full-stack applications using MERN.

        </div>

        </CSSTransitionGroup>
        </CenterDiv>
      </div>
    );
  }
}

export default withRouter(About);
