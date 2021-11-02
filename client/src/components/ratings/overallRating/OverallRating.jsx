import React, {useState, useEffect} from 'react';
import axios from 'axios';

import reviewmeta from '../../../../sample/reviewmeta.js';

import RatingSummary from './RatingSummary.jsx';
import RatingDist from './ratingDist/RatingDist.jsx';
import ProductBreakdown from './productBreakdown/ProductBreakdown.jsx';

let id = '43044';
let allRating = reviewmeta.ratings;
// console.log(allRating);
let sumRating = 0;
let countRating = 0;
for (const key in allRating) {
  let numRating = parseInt(key);
  // console.log(numRating);
  sumRating += numRating * allRating[key];
  countRating += parseInt(allRating[key]);
}
const avgRating = sumRating / countRating;
const recommend = reviewmeta.recommended;
const recommendCount = parseInt(recommend.true) || 0;
const notRecommendCount = parseInt(recommend.false) || 0;
const recommendPerc = recommendCount/(recommendCount + notRecommendCount);
// console.log(recommendCount/(recommendCount + notRecommendCount));

var OverallRating = (props) => {
  const [overallRating, setRating] = useState({});

  // useEffect(() => {
  //   axios.get(`http://localhost:3000/api/reviews/meta?product_id=${id}`)
  //     .then(res => {
  //       console.log('overall rating data:', res.data)
  //     })
  //     .catch(err => {
  //       console.log('Error fetching overall rating data: ', err);
  //     })
  // })

  return(
    <div className="overall-rating">
      <RatingSummary avgRating={avgRating}/>
      <RatingDist ratingDist={reviewmeta.ratings} recommendPerc={recommendPerc}
      totRatings={countRating}/>
      <ProductBreakdown breakdown={reviewmeta.characteristics}/>
    </div>
  )
};

export default OverallRating;