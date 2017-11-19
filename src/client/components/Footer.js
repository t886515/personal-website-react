import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FooterDiv } from '../styledComponents';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }

  }


  render() {
    return (
      <FooterDiv>
      123
      </FooterDiv>
    );
  }
}

export default withRouter(Footer);