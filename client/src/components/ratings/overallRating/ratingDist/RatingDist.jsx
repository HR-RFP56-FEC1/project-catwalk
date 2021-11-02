import React from 'react';

import RatingBar from './RatingBar.jsx';

var RatingDist = (props) => {
  return (
    <div className="rating-dist">
      <div id="recommend-perc">
        {Math.round(props.recommendPerc * 100)}% of reviews recommend this product
      </div>
      < RatingBar rating='5' totRatings={props.totRatings} ratingDist={props.ratingDist}/>
      < RatingBar rating='4' totRatings={props.totRatings} ratingDist={props.ratingDist}/>
      < RatingBar rating='3' totRatings={props.totRatings} ratingDist={props.ratingDist}/>
      < RatingBar rating='2' totRatings={props.totRatings} ratingDist={props.ratingDist}/>
      < RatingBar rating='1' totRatings={props.totRatings} ratingDist={props.ratingDist}/>
    </div>
  )
};

export default RatingDist;