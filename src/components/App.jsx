import React from 'react';
import style, { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { colors, FlexWrapper } from '../share-style/share-styles';
import NavBar from './NavBar';
import Home from './home/Home.jsx';
import About from './about/About.jsx';

// import Experiences from './experiences/Experiences.jsx';
// import ContactMe from './contact-me/ContactMe.jsx';
// import Journal from './journal/Journal.jsx';
// import JournalEntryPage from './journal/JournalEntryPage.jsx';
// import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.grey3};
    padding: 0;
    margin: 0;
    font-family: 'Quicksand', sans-serif;
  }
`;

// const CSSGridLayout = style.div`
//   height: 100vh;
//   display: grid;
//   grid-template-rows: auto;
//   grid-template-columns: auto;
//   grid-template-areas: "header" "content";
//   `;
// grid-template-rows: auto;

const AppWrapper = style.div`
  display: flex;
  
`;

// const routes = [
//   {
//     path: '/',
//     Component: "<Home />"
//   }, {
//     path: '/',
//     Component: "<About />"
//   }, {
//     path: '/',
//     Component: "< Experience />"
//   }, {
//     path: '/',
//     Component: Home
//   }
// ];
class App extends React.Component {
  // state = {
  //   selectedJournal: {}
  // };

  componentWillMount() {
    console.log('something ');
  }

  // updateJournals = journals => {
  //   this.setState({ journals });
  // };

  // updateSelectedJournal = selectedJournal => {
  //   this.setState({ selectedJournal });
  // };

  render() {
    return (
      // <CSSGridLayout>
      <div>
        <GlobalStyle />
        <NavBar />
        <AppWrapper>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            {/* <Route path="/about" render={() => <About />} /> */}
            {/* <Route path="/resume" render={() => <Experiences />} /> */}
            {/* <Route path="/contact" render={() => <ContactMe />} /> */}
          </Switch>
        </AppWrapper>
        {/* 
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/resume" render={() => <Experiences />} />
          <Route path="/contact" render={() => <ContactMe />} />
          <Route
            path="/journal"
            render={() => (
              <Journal
                updateJournals={this.updateJournals}
                updateSelectedJournal={this.updateSelectedJournal}
              />
            )}
          />
          <Route
            path="/journalPage"
            render={() => (
              <JournalEntryPage
                selectedJournal={this.state.selectedJournal}
                journals={this.state.journals}
                updateSelectedJournal={this.updateSelectedJournal}
              />
            )}
          />
        </Switch>
        <Footer /> */}
      </div>
      // </CSSGridLayout>
    );
  }
}

export default App;
