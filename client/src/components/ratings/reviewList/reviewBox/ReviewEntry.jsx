import React, {useState, useEffect} from 'react';
import moment from 'moment';
import axios from 'axios';

import Stars from '../../../shared/Stars.jsx';

var ReviewEntry = (props) => {
  const [helpful, setHelpful] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(props.review.helpfulness);
  const [reported, setReported] = useState(false);

  let review = props.review;

  const voteHelpful = function() {
    var urlString = '/api/reviews/' + review.review_id + '/helpful';
    return axios({
      method: 'put',
      url: urlString,
      responseType: 'json'
    });
  };

  const clickVoteHelpful = (e) => {
    e.preventDefault();
    if (!helpful) {
      voteHelpful()
        .then((res) => {
          setHelpful(true);
          setHelpfulCount(helpfulCount + 1);
        })
        .catch(err => {
          console.log('Error voting for helpful reviews: ', err);
        })
    }
  }

  const reportReview = function() {
    var urlString = '/api/reviews/' + review.review_id + '/report';
    return axios({
      method: 'put',
      url: urlString,
      responseType: 'json'
    });
  };

  const clickReportReview = (e) => {
    e.preventDefault();
    if (!reported) {
      reportReview()
        .then((res) => {
          setReported(true);
        })
        .catch(err => {
          console.log(`Error report review with id ${review.review_id}: `, err);
        })
    }
  }

  return (
    <div className="review-entry">
      <div className="review-entry-top-row">
        <div id="review-entry-star-rating">
          <Stars rating={review.rating}/>
        </div>
        <div id="review-entry-username-date">
          {review.reviewer_name}, {moment(review.date).format("MMMM D, YYYY")}
        </div>
      </div>
      <div id="review-summary">
        {review.summary}
      </div>
      <div id="review-body">
        {review.body}
      </div>
      <div className="review-entry-bottom-row">
        Helpful? <u id="review-helpful-vote" style={{cursor:'pointer'}} onClick={clickVoteHelpful}>Yes</u> ({helpfulCount}) &nbsp;&nbsp;|&nbsp;&nbsp; <u id="review-report" style={{cursor:'pointer'}} onClick={clickReportReview}>Report</u>
      </div>
    </div>
  )
};

export default ReviewEntry;