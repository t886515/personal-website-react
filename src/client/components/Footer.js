import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }

  }


  render() {
    return (
      <div className="footer">
        <Link className="link" to="/"> Home </Link> |
        <Link className="link" to="/about"> About </Link> |
        <Link className="link" to="/resume"> Resume </Link> |
        <Link className="link" to="/journal"> Journal </Link> |
        <Link className="link" to="/contact"> Contact Me </Link>
      </div>
    );
  }
}

export default withRouter(Footer);