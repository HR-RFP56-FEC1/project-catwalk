import React from 'react';
import Overview from './overview/Overview.jsx';
import Ratings from './ratings/Ratings.jsx';
import QnA from './questions/QnA.jsx';

var App = (props) => (
  <div>
    <Overview />
    <Ratings />
    <QnA />
  </div>
);

export default App;