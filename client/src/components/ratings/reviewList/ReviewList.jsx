import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import _ from 'underscore';

import interactions from '../../shared/interactions.js';
// import reviews from '../../../../sample/reviews.js';
import SearchReview from './SearchReview.jsx';
import SortReview from './SortReview.jsx';
import NewReview from './newReview/NewReview.jsx';
import ReviewBox from './reviewBox/ReviewBox.jsx';

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
  const [displayedReviews, setDisplay] = useState(null);
  const [reviewsCount, setCount] = useState(2);
  const [sortBy, setSort] = useState('relevance');
  const [newReview, addNewReview] = useState(false);
  const [search, setSearch] = useState('');
  const [displayedReviewsAfterSearch, setAfterSearch] = useState(null);
  const [newReviewCount, setNewReviewCount] = useState(0);
<<<<<<< HEAD
  const [expand, setExpand] = useState(false);
=======
>>>>>>> 3e49727cbaeb57fa2d96908f5ce255087b1fcdaf
  // const [product, setProduct] = useState(null);

  const changeBody = () => {
    setExpand(!expand);
  }

  useEffect(() => {
    getReviews(props.id)
      .then(res => {
        // console.log('reviews data:', res.data);
        let reviewsData = res.data.results;
        // setProduct(res.data.product);
        let current = moment().startOf('day');

        let minDateDiff = 100000;
        let maxDateDiff = 0;
        let minHelpful = 100000;
        let maxHelpful = 0;

        for (var i = 0; i < reviewsData.length; i++) {
          let dateOfReview = moment(reviewsData[i].date, "YYYY-MM-DD");
          let dateDiff = current.diff(dateOfReview, 'days');
          reviewsData[i].dateDiff = dateDiff;
          reviewsData[i].helpful = reviewsData[i].helpfulness * -1;

          if (reviewsData[i].dateDiff <= minDateDiff) {
            minDateDiff = reviewsData[i].dateDiff;
          }
          if (reviewsData[i].dateDiff > maxDateDiff) {
            maxDateDiff = reviewsData[i].dateDiff;
          }

          if (reviewsData[i].helpfulness <= minHelpful) {
            minHelpful = reviewsData[i].helpfulness;
          }
          if (reviewsData[i].helpfulness > maxHelpful) {
            maxHelpful = reviewsData[i].helpfulness;
          }
        }

        let dateDiffRange = maxDateDiff - minDateDiff;
        let helpfulRange = maxHelpful - minHelpful;
        // console.log('dateDiff', minDateDiff, maxDateDiff);
        // console.log('helpfulness:', minHelpful, maxHelpful);

        for (var i = 0; i < reviewsData.length; i++) {
          reviewsData[i].relevance = (reviewsData[i].dateDiff - minDateDiff)/dateDiffRange - (reviewsData[i].helpfulness - minHelpful)/helpfulRange;
        }

        setReviews(reviewsData);
        setDisplay(_.sortBy(reviewsData, sortBy));
      })
      .catch(err => {
        console.log(`Error retrieving reviews data for product id ${props.id}`, err);
      })
  }, [props.id, newReviewCount])


  useEffect(() => {
    setDisplay(_.sortBy(displayedReviews, sortBy));
  }, [sortBy]);

  useEffect(() => {
    if (displayedReviews !== null) {
      if (search.trim().length > 3) {
        setAfterSearch(displayedReviews.filter((review) => {
          return review.body.toLowerCase().includes(search.trim()) || review.summary.toLowerCase().includes(search.trim());
        }))
      } else {
        setAfterSearch(null);
      }
    }
  }, [search])

  useEffect(() => {
    if (displayedReviews) {
    var elementList = document.getElementsByClassName("searchable-review");
    // console.log('what is this', elementList);
    if (elementList.length > 0) {
      for (let body of elementList) {
        // console.log('what inside', body);
        if (search.length > 3) {
          if (body) {
            var strBody = body.innerHTML;
            var stripped = strBody.replace('<span>', '');
            stripped = stripped.replace('</span>', '');
            // var regex = new RegExp(search.toLowerCase(), 'i');

            var after = stripped.replace(search, '<span>'+search+'</span>');
            // console.log('what happened', after);
            body.innerHTML = after;
            // console.log(search);
          }
        } else {
          if (body) {
            var strBody = body.innerHTML;
            var stripped = strBody.replace('<span>', '');
            stripped = stripped.replace('</span>', '');
            body.innerHTML = stripped;
          }
        }
      }
    }

    }
  }, [search, expand])

  useEffect(() => {
    if (allReviews !== null) {
      setDisplay(allReviews.filter((review) => {
        if (props.filter === 0) {
          return review;
        }
        if (props.filter >= 1 && props.filter <= 5) {
          return (review.rating == props.filter);
        }
      }))
    }
  }, [props.filter])

  const clickMoreReviews = (e) => {
    e.preventDefault();
    setCount(reviewsCount + 2);
    interactions("more-review", "ratings-and-reviews");
  }

  const changeSort = (sortMethod) => {
    setSort(sortMethod);
  }

  const searchReview = (keyword) => {
    setSearch(keyword);
  }

  const clickAddReview = (e) => {
    if (!newReview) {
      interactions("add-review", "ratings-and-reviews");
    }
    addNewReview(!newReview);
  }

  const newReviewPosted = () => {
    setNewReviewCount(newReviewCount + 1);
  }

  if (displayedReviews !== null) {
    // console.log('key word', search);
    // console.log('key word length', search.trim().length);
    // console.log('how many reviews there are:', displayedReviews.length);

    const top = (200 + reviewsCount * 40).toString() + '%';

    return (
      <div className="review-list">
        <SortReview reviews={displayedReviews} changeSort={changeSort.bind(this)}/>
        <SearchReview searchReview={searchReview} />
        <ReviewBox count={reviewsCount} reviews={displayedReviewsAfterSearch ? displayedReviewsAfterSearch : displayedReviews} expand={changeBody.bind(this)}/>
        <div className="review-bottom-buttons">
          {
            displayedReviews.length > 2 &&
            <div id="more-review">
              <button id="more-review-btn" className="more-and-add-reviews-btn"
                onClick={clickMoreReviews}>
                MORE REVIEWS
              </button>
            </div>
          }

          <div id="add-review">
            <button id="add-review-btn" className="more-and-add-reviews-btn"
            onClick={clickAddReview}>
              ADD A REVIEW &nbsp;&nbsp;+
            </button>
          </div>
        </div>
        {
          newReview &&
          <div className="modalBackground">
            <NewReview product={props.productInfo.name} close={clickAddReview} characteristics={props.characteristics} productId={props.id} posted={newReviewPosted.bind(this)}/>
          </div>
        }

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