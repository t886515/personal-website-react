import React from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div> 
      About me 
      </div>
    );
  }
}

export default withRouter(About);