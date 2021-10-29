import React from 'react';
import OverallRating from './overallRating/OverallRating.jsx';
import ReviewList from './reviewList/ReviewList.jsx';

var Ratings = (props) => (
  <div className="rating-widget">
    <h2> Ratings Box </h2>
    <div className="rating-box">
      <OverallRating/>
      <ReviewList/>
    </div>
  </div>
);

export default Ratings;