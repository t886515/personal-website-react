import React from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import { H1 } from '../../styledComponents';

class JournalEntryPage extends React.Component {
  constructor(props) {
    super(props)
    console.log('hihihi')
    this.state = {
    }
  }

  componentDidMount() {
    //fire api request to update journals in app
  }

  render() {
    const { selectedJournal } = this.props;
    return (
      <div>
        <H1> Journal </H1>
        <span>
        {selectedJournal.content}
        </span>
      </div>
    );
  }
}

export default withRouter(JournalEntryPage);
