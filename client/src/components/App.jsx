import React from 'react';
import Overview from './overview/Overview.jsx';
import Ratings from './ratings/Ratings.jsx';
import QnA from './questions/QnA.jsx';

let id = 40346

var App = (props) => (
  <div>
    <Overview id={id}/>
    <Ratings />
    <QnA />
  </div>
);

export default App;