import React from 'react';
import {
  Card,
  InsideCard,
  InsideCardImage
} from '../../share-style/card-1';

const Project = () => {
  return (
    <Card>
      <InsideCardImage src="./static/images/THD_logo.jpg" />
      <InsideCard>
        <span>
          Integrated Slack API with Home Depot's internal browser testing
          framework to provide continuous error report monitoring.
        </span>
        <span>
          Implemented Concourse CI/CD pipelines for continuous automated
          functional and end-to-end testing of B2C site across all devices and
          major browsers.
        </span>
        <span>
          Integrated third-party MobileLabs to internal testing framework to
          allow automation test on real mobile devices on CI/CD pipelines.
        </span>
        <span>
          Designed and optimized browser test report data structure to enable
          flexible use of nesting test suites for Selenium/Webdriver.io and
          Mocha browser tests.
        </span>
        <span>
          Implemented GraphQL with Apollo and Express server for internal tool's
          Graphical User Interface backend.
        </span>
        <span>
          Designed and built interactive Graphical User Interface of Home
          Depot's internal browser testing tool using Vue.js, Apollo and
          D3/nvd3.
        </span>
      </InsideCard>
    </Card>
  );
};

export default Project;
