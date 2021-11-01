import React from 'react';

import reviewmeta from '../../../../sample/reviewmeta.js';

import RatingSummary from './RatingSummary.jsx';
import RatingDist from './ratingDist/RatingDist.jsx';
import ProductBreakdown from './productBreakdown/ProductBreakdown.jsx';

let allRating = reviewmeta.ratings;
  // console.log(allRating);
let sumRating = 0;
let countRating = 0;
for (const key in allRating) {
  let numRating = parseInt(key);
  sumRating += numRating * allRating[key];
  countRating += allRating[key];
}
const avgRating = sumRating / countRating;
const recommend = reviewmeta.recommended;
const recommendCount = parseInt(recommend.true) || 0;
const notRecommendCount = parseInt(recommend.false) || 0;
const recommendPerc = recommendCount/(recommendCount + notRecommendCount);
// console.log(recommendCount/(recommendCount + notRecommendCount));

var OverallRating = (props) => (
  <div className="overall-rating">
    <RatingSummary avgRating={avgRating}/>
    <RatingDist ratingDist={reviewmeta.ratings} recommendPerc={recommendPerc}
    totRatings={countRating}/>
    <ProductBreakdown rating={reviewmeta}/>
  </div>
);

export default OverallRating;