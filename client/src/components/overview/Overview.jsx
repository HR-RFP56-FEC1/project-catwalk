import React, {useState} from 'react'
import Rating, {Style, Styles, Details} from './overview-components/ProductDetails.jsx'
import Facts, {Fact, Slogan, Description} from './overview-components/ProductDescription.jsx'
import Size, {Quantity, Watch, AddToBag} from './overview-components/OverviewButtons.jsx'
import Carousel, {Thumbs, Thumb} from './overview-components/Carousel.jsx'
import styles from '../../../sample/styles.js'
import product from '../../../sample/product.js'

const Logo = () => (
  <div>
    <div id='logo'>LOGO</div>
    <div id='announcement'><i>SITE-WIDE ANNOUNCEMENT MESSAGE!</i> - SALE / DISCOUNT <b>OFFER</b> - <u>NEW PRODUCT HIGHLIGHT</u></div>
  </div>
)

const Overview = () => {
  const [styleList, setStyleList] = useState(styles)
  const [productDetails, setProductDetails] = useState(product)
  return (
    <div id='overview'>
      <Logo />
      <div id='body'>
        <div id='left'>
          <Carousel styleList={styleList}/>
          <div id='description-container'>
            <Slogan productDetails={productDetails} />
            <Description productDetails={productDetails} />
          </div>
        </div>
        <div id='right'>
          <Rating />
          <Details productDetails={productDetails}/>
          <Styles styleList={styleList}/>
          <div id='buttons-select'>
            <Size />
            <Quantity />
          </div>
          <div id='buttons-add'>
            <AddToBag />
            <Watch />
          </div>
          <div id='bullet points'>
            <Facts />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview