import React from 'react';
import {
  Card,
  CardSummary,
  CardHeader,
  CardTitle
} from '../../share-style/card-2';


const Project2 = () => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            Title Of the Card
          </CardTitle>
        </CardHeader>
        <CardSummary>
          <span>
            Integrated Slack API with Home Depot's internal browser testing
            framework to provide continuous error report monitoring.
          </span>
        </CardSummary>
      </Card>
    );
};

export default Project2;
