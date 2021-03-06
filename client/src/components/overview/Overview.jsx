import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Logo from './overview-components/OverviewLogo.jsx'
import sampleStyles from '../../../sample/styles.js'
import sampleProduct from '../../../sample/product.js'
import sampleReviewMeta from '../../../sample/reviewmeta.js'
import TopLeft, {TopRight, BottomHalf} from './overview-components/OverviewQuadrants.jsx'
import CalculateRating from '../shared/CalculateRating.jsx'
import interactions from '../shared/interactions.js';

const Overview = ({ id, productInfo, reviews }) => {
  // const [product, setProduct] = useState()
  const [styles, setStyles] = useState()
  const [currentStyle, setCurrentStyle] = useState(0)
  const [image, setImage] = useState(0)
  // const [reviews, setReviews] = useState()
  const [view, setView] = useState('default')

  useEffect(() => {
    setImage(0)
    setCurrentStyle(0)

    axios(`api/products/${id}/styles`)
      .then(response => {
        setStyles(response.data)
      })
      .catch(err => {
        console.log('Error on GET: ' + err)
      })

  }, [productInfo])

  const handleOnClick = (styleNum) => {
    setCurrentStyle(styleNum)
    setImage(0)
    interactions("select-style", "overview");
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
    interactions("change-view", "overview");
  }

  if (productInfo && styles && reviews /* && styles.results[currentStyle].skus */) {
    if (!styles.results[currentStyle].skus) {
      debugger
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
                product={productInfo}
                rating={CalculateRating(reviews)}
                skuList={styles.results[currentStyle].skus}
              />
            }
          </div>
          <BottomHalf
            product={productInfo}
          />
        </div>
      </div>
    )
  } else return <></>
}
export default Overview