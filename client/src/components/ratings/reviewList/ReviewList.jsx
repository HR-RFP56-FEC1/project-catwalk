import React, {useState, useEffect} from 'react';
import axios from 'axios';

import reviews from '../../../../sample/reviews.js';

import SortReview from './SortReview.jsx';
import ReviewBox from './reviewBox/ReviewBox.jsx';
import AddReview from './bottomButtons/AddReview.jsx';

let id = '40352';

const getReviews = function(id) {
  var urlString = `/api/reviews/?product_id=${id}&count=100`;
  return axios({
    method: 'get',
    url: urlString,
    responseType: 'json'
  });
}

var ReviewList = (props) => {
  const [allReviews, setReviews] = useState(null);
  const [display, setDisplay] = useState(2);

  useEffect(() => {
    getReviews(id)
      .then(res => {
        console.log('reviews data:', res.data);
        setReviews(res.data);
      })
  }, [])

  const clickMoreReviews = (e) => {
    e.preventDefault();
    setDisplay(display + 2);
  }

  console.log('current state reviews:', allReviews);
  console.log('sample data reviews:', reviews);

  if (allReviews !== null) {
    return (
      <div className="review-list">
        <SortReview reviews={allReviews}/>
        <ReviewBox display={display} reviews={allReviews}/>
        <div className="review-bottom-buttons">
          {
            allReviews.results.length > 2 &&
            <div id="more-review">
              <button id="more-review-btn" className="more-and-add-reviews-btn"
                onClick={clickMoreReviews}>
                MORE REVIEWS
              </button>
            </div>
          }

          <AddReview />
        </div>

      </div>
    )
  } else {
    return (
      <div>
        Loading reviews...
      </div>
    )
  }
};

export default ReviewList;