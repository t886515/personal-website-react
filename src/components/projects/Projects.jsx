import React from 'react';
import style from 'styled-components';
import Project from './Project';
import { FlexWrapper, colors } from '../../share-style/share-styles';

const ProjectsWrapper = style(FlexWrapper)`
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${colors.grey1}
  
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <Project />
    </ProjectsWrapper>
  );
};

export default Projects;
