import React from 'react';
import titleName from '../images/titlenamesh.png';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';

// const styles = {
//   centerDiv: {
//     textAlign: 'center'
//   },
//   navlink: {
//     textDecoration: 'none',
//     color: '#212121',
//     width: '80%',
//     fontSize: '20px',
//     fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif'
//   }
// }

class Home extends React.Component {
  render() {
    return (
      <div>
          <div className="centerDiv">
            <img src={titleName}/>
            <div className="testing">
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

