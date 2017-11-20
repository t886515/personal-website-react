import React from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import { H1, H3, ResumeRight, ResumeLeft } from '../styledComponents';
import { CSSTransitionGroup } from 'react-transition-group';

class Experiences extends React.Component {
  render() {
    return (
      <div> 
      <H1>Resume</H1>

        <br />
        <hr />
        <br />
        <div>
        <ResumeLeft>
        <H3>Technical Skills</H3>
        </ResumeLeft>
        <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={900}
        transitionEnter={false}
        transitionLeave={false}>
        <ResumeRight>
        <br />
        Strong
        <br />
        JavaScript, CSS/HTML, AngularJS, React.js, Express.js, Mongoose, MongoDB, Git
        <br />
        Experienced
        <br />
        D3.js, Node.js, MySQL, SQLite, Webpack
        </ResumeRight>
        </CSSTransitionGroup>
        </div>
        
        <br />
        <hr />
        <br />

        <div className="developmentExp">
        <ResumeLeft>
        <H3>Applications</H3>
        </ResumeLeft>
        <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={900}
        transitionEnter={false}
        transitionLeave={false}>
        <ResumeRight>
            <span>
            Mindflare - Front-End Software Engineer
            <br />
            <a href="http://mindflare.me/">http://mindflare.me/</a>
            <br />
            A productivity app that uses a tree data structure to allow users to create a visualization of ideas 
            <br />
            Designed NoSQL database schema using Mongoose ORM to organize data type, data relationship, and data storage efficiently
            <br />
            Utilized React.js with D3 to display an interactive visualization of static tree data
            <br />
            Implemented tree traversal algorithms to manipulate nodes in the tree data structure
            </span>
            <br />
            <hr />
            <br />
            <span>
            Concreet - Front-End Software Engineer
            <br />                                                            
            <a href="http://www.concreet.date/">http://www.concreet.date/</a>
            <br />
            A calendar manager app that allows users to check for attendees’ available  hours and send event invitations
            <br />
            Constructed overall front-end structure using React.js framework for an optimal user experience
            <br />
            Set up client to server Ajax requests for user authentication and calendar data retrieval
            <br />
            Designed intuitive UI for contact and group management with CSS styling and Font Awesome library

            </span>

            <br />
            <hr />
            <br />
            <span>
            Student Selector - Full-Stack Software Engineer
            <br />
            <a href="https://github.com/t886515/random-selector">https://github.com/t886515/random-selector</a>
            <br />
            A tool that allows users to store student data and to randomly select or group students in the classroom
            <br />
            Architected front-end and back-end structure of the application implementing AngularJS and Express.js
            <br />
            Integrated Mongo database and Express.js to ensure data persistency
            <br />
            Implemented efficiency algorithm for random selection and random group selection

            </span>
        </ResumeRight>
        </CSSTransitionGroup>

        </div>

        <br />
        <hr />
        <br />

        <div>
        <ResumeLeft>
        <H3>Education</H3>
        </ResumeLeft>
        <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={900}
        transitionEnter={false}
        transitionLeave={false}>
        <ResumeRight>
        University of Texas at Austin - Bachelor of Chemistry --- Austin, Texas 2010 - 2014
        <br />
        Austin Community College - Computer Science (APT) --- Austin, Texas 2016 - 2017
        <br />
        Hack Reactor - Advanced Software Engineering Immersive --- Austin, Texas 2017 
        </ResumeRight>
        </CSSTransitionGroup>
        </div>

        <br />
        <hr />
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(Experiences);