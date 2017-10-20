import React from 'react';
import titleName from '../images/titlenamesh.png';
import logo from '../images/namelogo2.png';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Resume from './Resume.jsx';
import ContactMe from './ContactMe.jsx';
import Projects from './Projects.jsx'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="homeDiv">
          <div style={{ backgroundColor: 'black' }}>
            <Link className="navlink" to="/"><img className="logo" src={logo}/></Link>
          </div>
          <Switch>
            <Route exact path="/" render={()=><Home />} />
            <Route path="/about" render={()=><About />} />
            <Route path="/resume" render={()=><Resume />} />
            <Route path="/contact" render={()=><ContactMe />} />
            <Route path="/project" render={()=><Projects />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;