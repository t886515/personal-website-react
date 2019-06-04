import React from 'react';
// import { withRouter } from 'react-router-dom';
import style from 'styled-components';
import {
  FlexWrapper,
  FadeInTransition,
  H1
} from '../../share-style/share-styles';

const AboutWrapper = style(FlexWrapper)`
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;
const AboutDescription = style(FlexWrapper)`
  width: 500px;
  & > *:not(:first-child) {
    margin-top: 10px;
  }
`;

const About = () => {
  return (
    <FadeInTransition id="about">
      <AboutWrapper direction="column">
        <H1>About Me</H1>
        <AboutDescription direction="column">
          <span>
            It's amazing that we have the ability to key in letters to bring an
            idea into an living app in the digital world!
          </span>
          <span>
            I'm passionate about find the most efficient solutions for better
            application performances, while following the best practices to
            ensure application maintenance.
          </span>
          <span>
            My most proficient language is JavaScript, but I've also worked with
            Java 8/Spring Boot for backend orchestration layer development!
          </span>
        </AboutDescription>
      </AboutWrapper>
    </FadeInTransition>
  );
};

export default About;
