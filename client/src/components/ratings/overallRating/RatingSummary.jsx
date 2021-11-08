import React from 'react';

import Stars from '../../shared/Stars.jsx'

var RatingSummary = (props) => {

  return (
    <div className="rating-summary">
      <div id="average-rating" onClick={()=> {props.filter(0)}}
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