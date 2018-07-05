import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './about/About.jsx';
import Home from './home/Home.jsx';
import Experiences from './experiences/Experiences.jsx';
import ContactMe from './contact-me/ContactMe.jsx';
import Journal from './journal/Journal.jsx';
import JournalEntryPage from './journal/JournalEntryPage.jsx';
import NavBar from './NavBar';
import Footer from './Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends React.Component {
  state = {
    selectedJournal: {},
  };

  updateJournals = (journals) => {
    this.setState({ journals });
  }

  updateSelectedJournal = (selectedJournal) => {
    this.setState({ selectedJournal });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
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
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
