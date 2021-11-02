import React, {useState, useEffect} from 'react';
import ReviewEntry from './ReviewEntry.jsx';

import reviews from '../../../../../sample/reviews.js';

var ReviewBox = (props) => {
  return (
    <div className="review-box">
      <ReviewEntry review={reviews.results[0]}/>
      <ReviewEntry review={reviews.results[1]}/>
    </div>
  )
};

export default ReviewBox;