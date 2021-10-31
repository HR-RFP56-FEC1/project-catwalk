import React from 'react';

import reviewmeta from '../../../../sample/reviewmeta.js';

import RatingSummary from './RatingSummary.jsx';
import RatingDist from './RatingDist.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

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



var OverallRating = (props) => (
  <div className="overall-rating">
    <RatingSummary avgRating={avgRating}/>
    <RatingDist rating={reviewmeta}/>
    <ProductBreakdown rating={reviewmeta}/>
  </div>
);

export default OverallRating;