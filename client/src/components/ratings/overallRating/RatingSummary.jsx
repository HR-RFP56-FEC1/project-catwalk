import React from 'react';

var RatingSummary = (props) => {

  return (
    <div className="rating-summary">
      <div id="average-rating">
        {props.avgRating.toFixed(1)}
      </div>
      <div className="rating-summary-star-rating">
       <img src='img/stars.png' id='stars'/>
      </div>
    </div>
  )
};

export default RatingSummary;