import React from 'react';

import RatingSummary from './RatingSummary.jsx';
import RatingDist from './RatingDist.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

var OverallRating = (props) => (
  <div className="overall-rating">
    {/* <div>OverallRating Column</div> */}
    <RatingSummary />
    <RatingDist />
    <ProductBreakdown />
  </div>
);

export default OverallRating;