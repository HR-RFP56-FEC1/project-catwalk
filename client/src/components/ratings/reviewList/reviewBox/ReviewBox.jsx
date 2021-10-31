import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';

import reviews from '../../../../../sample/reviews.js';

var ReviewBox = (props) => (
  <div className="review-box">
    <ReviewEntry review={reviews.results[0]}/>
    <ReviewEntry review={reviews.results[1]}/>
  </div>
);

export default ReviewBox;