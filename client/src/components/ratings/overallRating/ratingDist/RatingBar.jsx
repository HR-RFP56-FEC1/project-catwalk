import React from 'react';

var RatingBar = (props) => {
  let rating = props.rating;
  let count = props.ratingDist[rating] || 0;
  let perc = Math.round(100 * count/props.totRatings);

  return (
    <div className="rating-bar">
      <div className="rating-bar-text">
        <u>{props.rating} stars</u> ({perc} %)
      </div>
      <div className="rating-bar-diagram">
        <progress className="rating-perc-diagram" value={perc} max="100"/>
      </div>

    </div>
  )
}

export default RatingBar;