import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Experiences from './Experiences.jsx';
import ContactMe from './ContactMe.jsx';
import Journal from './Journal.jsx';
import JournalEntryPage from './JournalEntryPage.jsx';
import NavBar from './NavBar';
import Footer from './Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journals: [{
        _id: '24324',
        title: 'Just before I go...',
        author: 'lina',
        body: "When it is the darkest, men see the stars. \n -Ralph Waldo Emerson \n Forget how dark it is, look at the stars, keep going, and never look back.",
        comments:[{}],
        date: 'Jan, 1, 2018',
        hidden: false
      }, {
        _id: '203423',
        title: 'Fear',
        author: 'linaa',
        body: 'F.E.A.R. has two meanings. \n Forget Everything And Run, or Face Everything And Rise. \n The choice is yours.',
        comments:[{}],
        date: 'Jan, 21, 2018',
        hidden: false
      }, {
        _id: '23423',
        title: '到底該怎麼辦呢',
        author: 'lina',
        body: '慢慢來，一天一步。總是會成功的。',
        comments:[{}],
        date: 'Jan, 13, 2018',
        hidden: false
      }],
      selectedJournal: {},
    }
    this.updateJournals = this.updateJournals.bind(this);
    this.updateSelectedJournal = this.updateSelectedJournal.bind(this);
  }

  updateJournals(journals) {
    this.setState({ journals });
  }

  updateSelectedJournal(selectedJournal) {
    this.setState({ selectedJournal });
  }

  render() {
    return (
       <MuiThemeProvider>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" render={()=><Home />} />
            <Route path="/about" render={()=><About />} />
            <Route path="/resume" render={()=><Experiences />} />
            <Route path="/contact" render={()=><ContactMe />} />
            <Route path="/journal" render={()=><Journal
              journals={this.state.journals}
              updateJournals={this.updateJournals}
              updateSelectedJournal={this.updateSelectedJournal}
            />} />
            <Route path="/journalPage" render={()=><JournalEntryPage
              selectedJournal={this.state.selectedJournal}
              journals={this.state.journals}
              updateSelectedJournal={this.updateSelectedJournal}
             />} />
          </Switch>
        <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;