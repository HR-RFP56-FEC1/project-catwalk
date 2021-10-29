import React from 'react';

import ProductBreakdown from './ProductBreakdown.jsx';

var OverallRating = (props) => (
  <div className="overall-rating">
    OverallRating Column
    <ProductBreakdown />
  </div>
);

export default OverallRating;