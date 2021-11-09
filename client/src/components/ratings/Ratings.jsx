import React, {useState, useEffect} from 'react';
import OverallRating from './overallRating/OverallRating.jsx';
import ReviewList from './reviewList/ReviewList.jsx';

// let id = '40344';

var Ratings = ({id, overallRating}) => {
  const [filter, setFilter] = useState('0');

  const filterReviews = function (rating) {
    setFilter(rating);
  }

  // useEffect(()=> {
  //   console.log('current filter:', filter);
  // }, [filter])

  return (
    <div className="rating-widget">
      <div id="rating-headline">RATINGS &#38; REVIEWS </div>
      <div className="rating-box">
        <OverallRating id={id} filter={filterReviews.bind(this)} overallRating={overallRating} />
        <ReviewList id={id} filter={filter}/>
      </div>
    </div>
  )
};

export default Ratings;