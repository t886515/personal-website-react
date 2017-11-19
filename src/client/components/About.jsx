import React from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import { CenterDiv, H1, H3 } from '../styledComponents';

class About extends React.Component {
  render() {
    return (
      <CenterDiv> 
         <H1>About Me</H1>
         <H3>
          I’m a Full-Stack Software Engineer who loves to turn ideas into practical software.
          <br />
          I’m the type of person who emphasizes on self-improvements and loves to push myself.
          <br /> 
          I enjoy programming. Its problem-solving, logical thinking, and ever-changing nature fascinates me!
          <br />
          I love exploring new frameworks, working to find efficient algorithms for better application performances.
          
          <br />
          I’m experienced building single-page applications with Javascript. 
          <br />
          Popular front-end frameworks I’ve worked with include React.js and AngularJS.
          <br />
          I’m also big fan of MERN stack, and I'm experienced developing full-stack applications using MERN. 

         </H3>

      </CenterDiv>
    );
  }
}

export default withRouter(About);