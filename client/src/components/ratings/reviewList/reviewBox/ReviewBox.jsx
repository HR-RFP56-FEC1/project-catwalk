import React, {useState, useEffect} from 'react';
import ReviewEntry from './ReviewEntry.jsx';

var ReviewBox = (props) => {
  console.log('what was passed in?', props.reviews);
  let toDisplay = [...Array(props.display).keys()];
  console.log('number of reviews to show:', props.display, toDisplay);

  return (
    <div className="review-box">
      {toDisplay.map(i => {
        if (props.reviews.results[i]) {
          return <ReviewEntry review={props.reviews.results[i]} key={props.reviews.results[i].review_id}/>;
        }
      })}

    </div>
  )
};

export default ReviewBox;