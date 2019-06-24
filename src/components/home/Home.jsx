import React from 'react';
import { withRouter } from 'react-router-dom';
import style from 'styled-components';
import {
  FlexWrapper,
  FadeInTransition,
  colors
} from '../../share-style/share-styles';
import About from '../about/About';
import Projects from '../projects/Projects';

const HomeWrapper = style(FlexWrapper)`
  width: 100%;
`;

const HomeNameTitle = style(FlexWrapper)`
  height: 80vh;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/SApe8D0Hxixn8kzj7/computer-keyboard-with-fiber-optics-background-shot-in-hd_hodkyrhdg_thumbnail-full01.png');
  
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  opacity: 0.8;

  &: before {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    content: '';
  }

`;

const HomeMyName = style.h1`
  margin: 0;
  font-weight: normal;
  line-height: 1;
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 90px;
  color: ${colors.grey4}
`;

const HomeMyTitles = style.div`
  text-align: center;
  font-family: 'Economica', sans-serif;
  font-size: 30px;
  color: ${colors.grey6}
`;

const Home = () => {
  return (
    <HomeWrapper direction="column">
      <HomeNameTitle direction="column">
        <FadeInTransition>
          <HomeMyName> LINA YANG </HomeMyName>
          <HomeMyTitles>
            SOFTWARE ENGINEER・FULL-STACK DEVELOPER・UI DESIGNER
          </HomeMyTitles>
        </FadeInTransition>
      </HomeNameTitle>
      <About />
      <Projects />
    </HomeWrapper>
  );
};

export default withRouter(Home);
