import React from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import { H1, CenterTextAlign, CenterDiv } from '../../styledComponents';


const ContactMe = () => {
   return (
      <CenterDiv>
      <H1> Contact Me </H1>
      <div className="text-div">
      LinkedIn: https://www.linkedin.com/in/lina-yang-6610b393/
      <br />
      GitHub: https://github.com/t886515/
      <br />
      Email: lina.c.yang.55@gmail.com
      </div>

      </CenterDiv>
  );
}

export default ContactMe;
