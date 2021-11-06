import React, {useState, useEffect} from 'react';
import moment from 'moment';
import axios from 'axios';

// import ReviewPhoto from './ReviewPhoto.jsx';
import Stars from '../../../shared/Stars.jsx';

var ReviewEntry = (props) => {
  const [helpful, setHelpful] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(props.review.helpfulness);
  const [reported, setReported] = useState(false);
  const [fullReview, setFullReview] = useState(false);

  let review = props.review;

  const toggleReview = () => {
    setFullReview(!fullReview);
  }

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
        {!fullReview && review.body.length > 250 ? review.body.substring(0, 250) + '...' : review.body}

        {
          !fullReview && review.body.length > 250 &&
          <div onClick={toggleReview}>
            <span id="show-more-review-body-btn">&#8595; Show more</span>
          </div>
        }

        {
          fullReview &&
          <div onClick={toggleReview}>
            <span id="show-less-review-body-btn">&#8593; Show less</span>
          </div>
        }

      </div>

      {
        review.photos.length > 0 &&
        <div className="review-photos-thumbnail">
          {/* {[0, 1, 2, 3, 4].map(i => {
            if (review.photos[i]) {
              return (
                <ReviewPhoto photo={review.photos[i]} key={review.photos[i].id} />
              )
            }
          })} */}
        </div>

      }

      {
        review.recommend &&
        <div id="recommend-this-product">
          <span>&#10003; I recommend this product</span>
        </div>
      }

      {
        review.response &&
        <div id="seller-response-to-review">
          <p style={{fontWeight: 'bold'}}>
            Response:
          </p>
          <p>
            {review.response}
          </p>
        </div>
      }

      <div className="review-entry-bottom-row">
        Helpful? <u id="review-helpful-vote" style={{cursor:'pointer'}} onClick={clickVoteHelpful}>Yes</u> ({helpfulCount}) &nbsp;&nbsp;|&nbsp;&nbsp; <u id="review-report" style={{cursor:'pointer'}} onClick={clickReportReview}>{reported ? 'Reported' : 'Report'}</u>
      </div>
    </div>
  )
};

export default ReviewEntry;