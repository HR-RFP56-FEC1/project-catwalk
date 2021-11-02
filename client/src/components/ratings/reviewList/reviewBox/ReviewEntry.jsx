import React from 'react';
import moment from 'moment';

import Stars from '../../../shared/Stars.jsx';

var ReviewEntry = (props) => {
  let sampleReview = props.review;

  return (
    <div className="review-entry">
      <div className="review-entry-top-row">
        <div id="review-entry-star-rating">
          <Stars rating={sampleReview.rating}/>
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
        Helpful? <u>Yes</u> ({sampleReview.helpfulness}) &nbsp;&nbsp;|&nbsp;&nbsp; <u>Report</u>
      </div>
    </div>
  )
};

export default ReviewEntry;