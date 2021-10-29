import React from 'react';
import OverallRating from './OverallRating.jsx';
import ReviewList from './ReviewList.jsx';

var Ratings = (props) => (
  <div className="rating-widget">
    Rating Component
    <OverallRating/>
    <ReviewList/>
  </div>
);

export default Ratings;