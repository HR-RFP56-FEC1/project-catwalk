import React from 'react';

import SortReview from './SortReview.jsx';
import ReviewBody from './reviewBody/ReviewBody.jsx';
import MoreReview from './bottomButtons/MoreReview.jsx';
import AddReview from './bottomButtons/AddReview.jsx';

var ReviewList = (props) => (
  <div className="review-list">
    <SortReview />
    <ReviewBody />
    <div className="review-bottom-buttons">
      <MoreReview />
      <AddReview />
    </div>

  </div>
);

export default ReviewList;