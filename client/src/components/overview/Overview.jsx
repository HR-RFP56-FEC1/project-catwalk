import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Logo from './overview-components/OverviewLogo.jsx'
import sampleStyles from '../../../sample/styles.js'
import sampleProduct from '../../../sample/product.js'
import sampleReviewMeta from '../../../sample/reviewmeta.js'
import GetProductInformation, {GetProductStyles, GetProductReviews} from './RequestAPI.jsx'
import TopLeft, {TopRight, BottomHalf} from './overview-components/OverviewQuadrants.jsx'

const Overview = ({ id }) => {
  const [product, setProduct] = useState(sampleProduct)
  const [styles, setStyles] = useState(sampleStyles)
  const [currentStyle, setCurrentStyle] = useState(0)
  const [image, setImage] = useState(0)
  const [reviews, setReviews] = useState(sampleReviewMeta)
  const [view, setView] = useState('default')

  useEffect(() => {
    axios(GetProductInformation(id))
      .then(response => {
        setProduct(response.data)
      })
      .catch(err => {
        console.log('Error on GET: ' + err)
      })

    axios(GetProductStyles(id))
      .then(response => {
        console.log(response.data)
        setStyles(response.data)
      })
      .catch(err => {
        console.log('Error on GET: ' + err)
      })

      axios(GetProductReviews(id))
      .then(response => {
        setReviews(response.data)
      })
      .catch(err => {
        console.log('Error on GET: ' + err)
      })
  }, [])

  const handleOnClick = (styleNum) => {
    setCurrentStyle(styleNum)
    //to reset image to first image on style change:
    /*setImage(0)*/
  }

  const changeView = (viewType, from) => {
    if (from === 'sizer') {
      if (viewType === 'expanded') {
        setView('default')
      } else {
        setView('expanded')
      }
    }
    if (from === 'image') {
      if (viewType === 'default') {
        setView('expanded')
      } else if (viewType === 'expanded') {
        setView('magnify')
      } else {
        setView('expanded')
      }
    }
  }

  const calculateRating = (reviewData) => {
    let points = 0
    let reviews = 0
    let ratings = reviewData.ratings

    for (let key in ratings) {
      reviews += parseInt(ratings[key])
      points += parseInt(key) * ratings[key]
    }
    return points / reviews
  }

  return (
    <div id='overview'>
      <Logo />
      <div id='body'>
        <div id='top-half'>
          <TopLeft
            styles={styles}
            currentStyle={currentStyle}
            image={image}
            setImage={setImage}
            view={view}
            changeView={changeView}
          />
          {view === 'default' &&
            <TopRight
              styles={styles}
              onClick={handleOnClick}
              currentStyle={currentStyle}
              product={product}
              rating={calculateRating(reviews)}
              skuList={styles.results[currentStyle].skus}
            />
          }
        </div>
        <BottomHalf
          product={product}
        />
      </div>
    </div>
  )
}

export default Overview