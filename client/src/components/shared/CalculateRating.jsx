import React from 'react'

const CalculateRating = (reviewData) => {
  let points = 0
  let reviews = 0
  let ratings = reviewData.ratings

  for (let key in ratings) {
    reviews += parseInt(ratings[key])
    points += parseInt(key) * ratings[key]
  }
  return points / reviews
}

export default CalculateRating