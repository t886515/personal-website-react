import React from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import { H1, CenterTextAlign, CenterDiv, TextDiv } from '../styledComponents';

class ContactMe extends React.Component {

  render() {
    return (
      <CenterDiv>
      <H1> Contact Me </H1>
      <TextDiv>
      LinkedIn: https://www.linkedin.com/in/lina-yang-6610b393/
      <br />
      GitHub: https://github.com/t886515/
      <br />
      Email: lina.c.yang.55@gmail.com
      </TextDiv>

      </CenterDiv>
    );
  }
}

export default withRouter(ContactMe);