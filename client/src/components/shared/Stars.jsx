import React from 'react'

const Stars = ({rating}) => {
  let starEmpty = 'img/stars/star-empty.png'
  let starQuarter = 'img/stars/star-quarter.png'
  let starHalf = 'img/stars/star-half.png'
  let starThreeQuarters = 'img/stars/star-three-quarters.png'
  let starFull = 'img/stars/star-full.png'

  let starSet = []
  let fullStars = rating - (rating % 1)
  let partialStar = rating % 1

  if (fullStars >= 5) {
    fullStars = 5
    partialStar = 0
  }

  for (let i = 0; i < fullStars; i++) {
    starSet.push(starFull)
  }

  if (partialStar !== 0) {
    if (partialStar < .125 ) {
      starSet.push(starEmpty)
    } else if (partialStar >= .125 && partialStar < .375) {
      starSet.push(starQuarter)
    } else if (partialStar >= .375 && partialStar < .625) {
      starSet.push(starHalf)
    } else if (partialStar >= .625 && partialStar < .875) {
      starSet.push(starThreeQuarters)
    } else {
      starSet.push(starFull)
    }
  }

  if (starSet.length < 5) {
    let remaining = 5 - starSet.length
    for (let i = 0; i < remaining; i++) {
      starSet.push(starEmpty)
    }
  }

  return (
    <div id='star-rating'>
      {starSet.map((value, i) => <Star key={i} path={value} />)}
    </div>
  )
}

const Star = ({path}) => (
  <img src={path}/>
)

export default Stars