import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

//construct query
const QUERY = gql`
  {
    Journals {
      id
      title
      content
      author
      createDate
    }
  }
`;

class JournalsQuery extends Component {
  render() {
    // now the props still contain children, but the actual content
    // is re-constructed from mapDataToProps
    const { children, isLoading, isError, isEmpty, journals } = this.props;

    //this only works when the "child"
    //of the child component in react has only a
    //function that's expecting a data.
    //if there's other things, children became
    //an array of those items
    return children && children(journals, { isLoading, isError, isEmpty });
  }
}

// this define the structure of the actual props caught in
// query component and will be passed down to children.
//This cleans up the data and validate ++ adding the isEmpty boolean
const mapDataToProps = ({ data }) => {
  const isLoading = data.loading;
  const isError = !!data.error;
  const isEmpty = !!data.Journals && !data.Journals.length;
  const journals = data.Journals || [];
  return { isLoading, isError, isEmpty, journals };
};

//options would allow me to pass down variables used for query
//this pass down the data retrieved from graphql query into
//the props of the component
export default graphql(QUERY, {
  // options: ({ country }) => ({ variables: { country } }),
  props: mapDataToProps,
})(JournalsQuery);
