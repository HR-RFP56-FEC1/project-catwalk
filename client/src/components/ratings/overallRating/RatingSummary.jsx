import React from 'react';

import interactions from '../../shared/interactions.js';
import Stars from '../../shared/Stars.jsx'

var RatingSummary = (props) => {

  return (
    <div className="rating-summary">
      <div id="average-rating" onClick={()=> {
        props.filter(0);
        interactions("average-rating", "ratings-and-reviews");
      }}
        style={ {cursor: "pointer"} }>
        {props.avgRating.toFixed(1)}
      </div>
      <div className="rating-summary-star-rating">
        <Stars rating={props.avgRating}/>
      </div>
    </div>
  )
};

export default RatingSummary;