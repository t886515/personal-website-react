import React from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';

class ContactMe extends React.Component {
  render() {
    return (
      <div> 
      Contact Me
      </div>
    );
  }
}

export default withRouter(ContactMe);