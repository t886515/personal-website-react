import React from 'react';
import style from 'styled-components';
import Project from './Project';
import Project2 from './Project2';
import {
  FlexWrapper,
  colors,
  FadeInTransition
} from '../../share-style/share-styles';

const ProjectsWrapper = style.div`
  height: 100vh;
  background-color: ${colors.grey1};
  

`;

// background - image: url('https://previews.123rf.com/images/aihumnoi/aihumnoi1707/aihumnoi170704579/82612391-leap-experiences-text-background-word-cloud-concept.jpg');

// background - attachment: fixed;
// background - position: center;
// background - repeat: no - repeat;
// background - size: cover;

const ProjectTransitionWrapper = style(FadeInTransition)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;


const Projects = () => {
  return (
    <ProjectsWrapper>
      <ProjectTransitionWrapper>
        <Project />
        <Project2 />
      </ProjectTransitionWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
