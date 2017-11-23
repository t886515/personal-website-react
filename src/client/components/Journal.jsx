import React from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import { H1 } from '../styledComponents';
import JournalEntryBlock from './JournalEntryBlock.jsx';

class Journal extends React.Component {
  constructor(props) {
    super(props)
    // console.log('hihihi')
    // this.state = {
    // }
  }

  componentDidMount() {
    //fire api request to update journals in app
    //use this.props.updateJournals to achieve this
  }

  render() {
    const mapJournalEntries = this.props.journals.map((journal) => {
      return ( 
        <JournalEntryBlock journal={journal} /> 
        )
    });

    return (
      <div>
      <H1> Journal </H1>
      {mapJournalEntries}
      </div>
    )
  }
}

export default withRouter(Journal);