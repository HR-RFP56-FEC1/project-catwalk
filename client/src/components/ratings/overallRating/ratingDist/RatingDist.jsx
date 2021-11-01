import React from 'react';

import RatingBar from './RatingBar.jsx';

var RatingDist = (props) => {
  return (
    <div className="rating-dist">
      <div id="recommend-perc">
        {Math.round(props.recommendPerc * 100)}% of reviews recommend this product
      </div>
      <div className="rating-bars">
        < RatingBar rating='5' />
      </div>
    </div>
  )
};

export default RatingDist;