import React from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import { H1, CenterTextAlign, CenterDiv, TextDiv } from '../styledComponents';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
// import Office from '../images/bg.jpg'

class JournalEntryBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zDepth: 2
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }


  handleMouseLeave() {
    this.setState({zDepth: 2})
  }

  handleMouseEnter() {
    this.setState({zDepth: 3})
  }

  render() {
    const { journal } = this.props;
    const journalDisplay = journal.body.length > 100? `${journal.body.slice(0, 100)}...(more)` : journal.body;

    return (
      <div>
      <Card 
      containerStyle={{"display": "inline"}} 
      style={{"width": "80%", "margin": "auto" }} 
      zDepth={this.state.zDepth}
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
      >
        <CardMedia>
        <img style={{"height": "70px"}} src="https://cdn.wallpapersafari.com/72/9/BXOTle.jpg" alt="" />
      </CardMedia>
        <CardTitle title={journal.title} subtitle={journal.date} />
        <CardText>
          {journalDisplay}
        </CardText>
        <CardActions>
          <FlatButton style={{"float":"right", "top":"-40px"}} label="Click to read more" />
        </CardActions>
      </Card>
      <br />
      </div>
    ) 
  }
}

// class JournalEntryBlock extends React.Component {

//   render() {
//     return (
//       <CenterDiv>
//       <H1> Contact Me </H1>
//       <TextDiv>
//       LinkedIn: https://www.linkedin.com/in/lina-yang-6610b393/
//       <br />
//       GitHub: https://github.com/t886515/
//       <br />
//       Email: lina.c.yang.55@gmail.com
//       </TextDiv>

//       </CenterDiv>
//     );
//   }
// }

export default JournalEntryBlock;