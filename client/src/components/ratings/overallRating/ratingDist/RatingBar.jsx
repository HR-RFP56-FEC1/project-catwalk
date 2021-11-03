import React from 'react';

var RatingBar = (props) => {
  let rating = props.rating;
  let count = props.ratingDist[rating] || 0;
  let perc = Math.round(100 * count/props.totRatings);

  const clickRating = function(e) {
    props.filter(props.rating);
  }

  return (
    <div className="rating-bar" onClick={clickRating}>
      <div className="rating-bar-text">
        <u>{props.rating} stars</u> ({perc} %)
      </div>
      <div className="rating-bar-diagram">
        <progress className="rating-perc-diagram" value={perc} max="100"/>
      </div>
      <div className="rating-bar-count">
        ({count})
      </div>

    </div>
  )
}

export default RatingBar;