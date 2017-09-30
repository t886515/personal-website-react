import React from 'react';
import test from '../images/titlenamesh.png'

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Lina Yang</h1>
        <img src={test}/>
      </div>
    );
  }
}