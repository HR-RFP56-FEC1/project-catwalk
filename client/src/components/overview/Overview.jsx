import React, {useState} from 'react'
import Rating, {Style, Styles, Details} from './overview-components/ProductDetails.jsx'
import Facts, {Fact, Slogan, Description} from './overview-components/ProductDescription.jsx'
import Size, {Quantity, Watch, AddToBag} from './overview-components/OverviewButtons.jsx'
import Carousel, {Thumbs, Thumb} from './overview-components/Carousel.jsx'

const Logo = () => (
  <div>
    <div id='logo'>LOGO</div>
    <div id='announcement'><i>SITE-WIDE ANNOUNCEMENT MESSAGE!</i> - SALE / DISCOUNT <b>OFFER</b> - <u>NEW PRODUCT HIGHLIGHT</u></div>
  </div>
)

const Overview = () => (
  <div id='overview'>
    <Logo />
    <div id='body'>
      <div id='left'>
        <Carousel />
        <div id='description-container'>
          <Slogan />
          <Description />
        </div>
      </div>
      <div id='right'>
        <Rating />
        <Details />
        <Styles />
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

export default Overview