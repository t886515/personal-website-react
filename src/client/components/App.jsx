import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Experiences from './Experiences.jsx';
import ContactMe from './ContactMe.jsx';
import Skills from './Skills.jsx';
import NavBar from './NavBar';
import Footer from './Footer';
import { FooterDiv } from '../styledComponents';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

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
            <Route path="/journal" render={()=><Skills />} />
          </Switch>
        </div>
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;