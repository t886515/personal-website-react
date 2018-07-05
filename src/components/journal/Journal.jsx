import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom';
import { H1 } from '../../styledComponents';
import JournalsQuery from '../apollo/JournalsQuery.jsx';
import JournalEntryBlock from './JournalEntryBlock.jsx';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class Journal extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // console.log('hihihi')
  //   // this.state = {
  //   // }
  // }

  componentDidMount() {
    //fire api request to update journals in app
    //use this.props.updateJournals to achieve this
  }

  render() {
    // const { journals, updateSelectedJournal } = this.props;
    const { updateSelectedJournal } = this.props;

    // <div>
    //   <H1> Journal </H1>
    //   {mapJournalEntries}
    //   <br />
    //   <br />
    // </div>

    // const mapJournalEntries = journals.map(journal => {
    //   return (
    //     <JournalEntryBlock
    //       key={journal._id}
    //       journal={journal}
    //       updateSelectedJournal={updateSelectedJournal}
    //     />
    //   );
    // });

    return (
      <JournalsQuery>
        {(journals, { isLoading, isError, isEmpty }) => {
          if (isLoading) {
            return <div>Loading..</div>;
          }

          if (isEmpty) {
            return <div>No Journal found</div>;
          }

          if (isError) {
            return <div>There was an error retriving journals...</div>;
          }

          return journals.map(journal => (
            <JournalEntryBlock
              key={journal.id}
              journal={journal}
              updateSelectedJournal={updateSelectedJournal}
            />
          ));
        }}
      </JournalsQuery>
    );
  }
}

export default withRouter(Journal);
