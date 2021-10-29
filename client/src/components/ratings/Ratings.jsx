import React from 'react';
import OverallRating from './overallRating/OverallRating.jsx';
import ReviewList from './reviewList/ReviewList.jsx';

var Ratings = (props) => (
  <div className="rating-widget">
    <div id="rating-headline">RATINGS &#38; REVIEWS </div>
    <div className="rating-box">
      <OverallRating/>
      <ReviewList/>
    </div>
  </div>
);

export default Ratings;