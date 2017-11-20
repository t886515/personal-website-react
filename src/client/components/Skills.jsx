import React from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import { H1 } from '../styledComponents';

class Skills extends React.Component {
  constructor(props) {
    super(props)
    console.log('hihihi')
  }
  render() {
    return (
      <H1> Journal </H1>
    );
  }
}

export default withRouter(Skills);