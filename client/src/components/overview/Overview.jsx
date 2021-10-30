import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Logo from './overview-components/OverviewLogo.jsx'
import Rating, {Style, Styles, Details} from './overview-components/ProductDetails.jsx'
import Facts, {Fact, Slogan, Description} from './overview-components/ProductDescription.jsx'
import Size, {Quantity, Watch, AddToBag} from './overview-components/OverviewButtons.jsx'
import Carousel, {Thumbs, Thumb} from './overview-components/Carousel.jsx'
import sampleStyles from '../../../sample/styles.js'
import sampleProduct from '../../../sample/product.js'
import GetProductInformation, {GetProductStyles} from './OverviewRequestAPI.jsx'

let id = 40344

const Overview = () => {
  const [productid, setProductid] = useState()
  const [product, setProduct] = useState(sampleProduct)
  const [styles, setStyles] = useState(sampleStyles)
  const [currentStyle, setCurrentStyle] = useState(0)

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
  }, [])

  return (
    <div id='overview'>
      <Logo />
      <div id='body'>
        <div id='left'>
          <Carousel styles={styles} currentStyle={currentStyle}/>
          <div id='description-container'>
            <Slogan product={product} />
            <Description product={product} />
          </div>
        </div>
        <div id='right'>
          <Rating />
          <Details product={product}/>
          <Styles styles={styles} setCurrentStyle={setCurrentStyle}/>
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