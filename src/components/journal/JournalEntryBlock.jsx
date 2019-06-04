import React from 'react';
import { withRouter } from 'react-router-dom';
import { H1, CenterTextAlign, CenterDiv } from '../../styledComponents';

// import Office from '../images/bg.jpg'

class JournalEntryBlock extends React.Component {
  state = {
    zDepth: 2
  };

  handleMouseLeave = () => {
    this.setState({ zDepth: 2 });
  };

  handleMouseEnter = () => {
    this.setState({ zDepth: 3 });
  };

  handleReadMore = e => {
    e.preventDefault();
    this.props.updateSelectedJournal(this.props.journal);
    this.props.history.push('/journalPage');
  };

  render() {
    const { journal } = this.props;
    const { author, content, title, createDate } = journal;
    const journalDisplay =
      content.length > 100 ? `${content.slice(0, 100)}...(more)` : content;

    return (
      <div>
        <Card
          containerStyle={{ display: 'inline' }}
          style={{ width: '80%', margin: 'auto' }}
          zDepth={this.state.zDepth}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <CardMedia>
            <img
              style={{ height: '70px' }}
              src="https://cdn.wallpapersafari.com/72/9/BXOTle.jpg"
              alt=""
            />
          </CardMedia>
          <CardTitle title={title} subtitle={createDate} />
          <CardText>{journalDisplay}</CardText>
          <CardActions>
            <FlatButton
              className="readMoreButton"
              label="Click to read more"
              onClick={this.handleReadMore}
            />
          </CardActions>
        </Card>
        <br />
      </div>
    );
  }
}

export default withRouter(JournalEntryBlock);
