import React from 'react';

import SortReview from './SortReview.jsx';
import ReviewBox from './reviewBox/ReviewBox.jsx';
import MoreReview from './bottomButtons/MoreReview.jsx';
import AddReview from './bottomButtons/AddReview.jsx';

var ReviewList = (props) => (
  <div className="review-list">
    <SortReview />
    <ReviewBox />
    <div className="review-bottom-buttons">
      <MoreReview />
      <AddReview />
    </div>

  </div>
);

export default ReviewList;