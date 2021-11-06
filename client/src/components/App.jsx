import React from 'react';
import Overview from './overview/Overview.jsx';
import Ratings from './ratings/Ratings.jsx';
import QnA from './questions/QnA.jsx';
import Related from './related/Related.jsx'

let id = 40344

var App = (props) => (
  <div>
    <Overview id={id}/>
    <Related id={id}/>
    <Ratings />
    <QnA />
  </div>
);

export default App;