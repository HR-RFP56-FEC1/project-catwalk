import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Logo from './overview-components/OverviewLogo.jsx'
import Rating, {Style, Styles, Details} from './overview-components/ProductDetails.jsx'
import Facts, {Fact, Slogan, Description} from './overview-components/ProductDescription.jsx'
import Size, {Quantity, Watch, AddToBag} from './overview-components/OverviewButtons.jsx'
import Carousel, {Thumbs, Thumb} from './overview-components/Carousel.jsx'
import sampleStyles from '../../../sample/styles.js'
import sampleProduct from '../../../sample/product.js'
import sampleReviewMeta from '../../../sample/reviewmeta.js'
import GetProductInformation, {GetProductStyles, GetProductReviews} from './RequestAPI.jsx'

const TopRight = ({rating, product, styles, currentStyle, onClick}) => (
  <div id='top-right'>
    <Rating rating={rating}/>
    <Details
      product={product}
      styles={styles}
      currentStyle={currentStyle}
    />
    <Styles
      styles={styles}
      onClick={onClick}
      currentStyle={currentStyle}
    />
    <div id='buttons-select'>
      <Size />
      <Quantity />
    </div>
    <div id='buttons-add'>
      <AddToBag />
      <Watch />
    </div>
  </div>
)

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
        setStyles(response.data)
      })
      .catch(err => {
        console.log('Error on GET: ' + err)
      })

      axios(GetProductReviews(id))
      .then(response => {
        console.log(response.data)
        setReviews(response.data)
      })
      .catch(err => {
        console.log('Error on GET: ' + err)
      })
  }, [])

  const handleOnClick = (styleNum) => {
    setCurrentStyle(styleNum)
    //the line below will set the current image to the first image in the set
    //when a style is changed. this seems intuitive to me, but the business
    //documents request that the image index be maintained when switching styles.

    /*setImage(0)*/
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
          <div id='top-left'>
            <Carousel
              styles={styles}
              currentStyle={currentStyle}
              image={image}
              setImage={setImage}
              />
          </div>
          <TopRight
            styles={styles}
            onClick={handleOnClick}
            currentStyle={currentStyle}
            product={product}
            rating={calculateRating(reviews)}
          />
        </div>
        <div id='bottom-half'>
          <div id='bottom-left'>
            <Slogan product={product} />
            <Description product={product} />
          </div>
          <div id='bottom-right'>
            <Facts />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview