import React, { useState, useEffect } from 'react';
import axios from 'axios';

import reviewmeta from '../../../../sample/reviewmeta.js';

import RatingSummary from './RatingSummary.jsx';
import RatingDist from './ratingDist/RatingDist.jsx';
import ProductBreakdown from './productBreakdown/ProductBreakdown.jsx';


// const getRatings = function (id) {
//   var urlString = `/api/reviews/meta?product_id=${id}&count=100`;
//   return axios({
//     method: 'get',
//     url: urlString,
//     responseType: 'json'
//   });
// }

var OverallRating = ({id, overallRating, filter}) => {

  if (overallRating !== null) {
    let allRating = overallRating.ratings;
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
    const recommend = overallRating.recommended;
    const recommendCount = parseInt(recommend.true) || 0;
    const notRecommendCount = parseInt(recommend.false) || 0;
    const recommendPerc = recommendCount / (recommendCount + notRecommendCount);

    return (
      <div className="overall-rating">
        <RatingSummary avgRating={avgRating} filter={filter}/>
        <RatingDist ratingDist={overallRating.ratings} recommendPerc={recommendPerc}
          totRatings={countRating} filter={filter}/>
        <ProductBreakdown breakdown={overallRating.characteristics} />
      </div>
    );
  } else {
    return (
      <div>
        Loading reviews...
      </div>
    )
  }
};

export default OverallRating;