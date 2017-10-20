import React from 'react';
import logo from '../images/namelogo2.png';
import home from '../images/home.png';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Resume from './Resume.jsx';
import ContactMe from './ContactMe.jsx';
import Projects from './Projects.jsx'
import { CSSTransitionGroup } from 'react-transition-group'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoChange: false
    }
    this.onMouseOverLogo = this.onMouseOverLogo.bind(this);
    this.onMouseOutLogo = this.onMouseOutLogo.bind(this);
  }

  componentDidMount() {
    console.log("how many times")
  }

  onMouseOverLogo(event) {
    console.log('did this happen?')
    this.setState({
      logoChange: true
    });
  }

  onMouseOutLogo(event) {
    console.log('fjdsklfjdskl')
    this.setState({
      logoChange: false
    })
  }


  render() {
    return (
      <BrowserRouter>
      <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
        <div className="homeDiv">
          <div style={{ backgroundColor: 'black' }}>
            <Link onMouseOver={this.onMouseOverLogo} onMouseOut={this.onMouseOutLogo} className="navlink" to="/">
              {!this.state.logoChange && <img id="logo" src={logo}/>}
              {this.state.logoChange && <img id="home" src={home}/>}
            </Link>
            <button className="languageButton">Chinese</button>
            <button className="languageButton">English</button>
          </div>
          <Switch>
            <Route exact path="/" render={()=><Home />} />
            <Route path="/about" render={()=><About />} />
            <Route path="/resume" render={()=><Resume />} />
            <Route path="/contact" render={()=><ContactMe />} />
            <Route path="/project" render={()=><Projects />} />
          </Switch>
        </div>
        </CSSTransitionGroup>
      </BrowserRouter>
    );
  }
}

export default App;