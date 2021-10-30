import React from 'react';
import moment from 'moment';

import reviews from '../../../../../sample/reviews.js';

let sampleReview = reviews.results[0];
var ReviewEntry = (props) => (
  <div className="review-entry">
    <div className="review-entry-top-row">
      <div id="review-entry-star-rating">
      <img src='img/stars.png' id='stars'/>
      </div>
      <div id="review-entry-username-date">
        {sampleReview.reviewer_name}, {moment(sampleReview.date).format("MMMM D, YYYY")}
      </div>
    </div>
    <div id="review-summary">
      {sampleReview.summary}
    </div>
    <div id="review-body">
      {sampleReview.body}
    </div>
    <div className="review-entry-bottom-row">
      Helpful? Yes({sampleReview.helpfulness}) | Report
    </div>
  </div>
);

export default ReviewEntry;