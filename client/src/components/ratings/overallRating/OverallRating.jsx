import React, {useState, useEffect} from 'react';
import axios from 'axios';

import reviewmeta from '../../../../sample/reviewmeta.js';

import RatingSummary from './RatingSummary.jsx';
import RatingDist from './ratingDist/RatingDist.jsx';
import ProductBreakdown from './productBreakdown/ProductBreakdown.jsx';

let id = '40346';

const getRatings = function(id) {
  var urlString = `/api/reviews/meta?product_id=${id}`;
  return axios({
    method: 'get',
    url: urlString,
    headers: {},
    responseType: 'json'
  });
}

var OverallRating = (props) => {
  const [overallRating, setRating] = useState(reviewmeta);

  useEffect(() => {
    getRatings(id)
      .then(res => {
        console.log('ratings data:', res.data);
        setRating(res.data);
      })
  }, [])

  console.log('current state:', overallRating.ratings);
  console.log('sample data:', reviewmeta);

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
  const recommendPerc = recommendCount/(recommendCount + notRecommendCount);
  // console.log(recommendCount/(recommendCount + notRecommendCount));

  return(
    <div className="overall-rating">
      <RatingSummary avgRating={avgRating}/>
      <RatingDist ratingDist={overallRating.ratings} recommendPerc={recommendPerc}
      totRatings={countRating}/>
      <ProductBreakdown breakdown={overallRating.characteristics}/>
    </div>
  )
};

export default OverallRating;