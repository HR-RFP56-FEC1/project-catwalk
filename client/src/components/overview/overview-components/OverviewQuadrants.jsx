import React, {useState} from 'react'
import Carousel, {Thumbs, Thumb} from './Carousel.jsx'
import Rating, {Style, Styles, Details} from './ProductDetails.jsx'
import Sizes, {Quantity, Watch, AddToBag} from './OverviewButtons.jsx'
import Facts, {Fact, Slogan, Description} from './ProductDescription.jsx'

const TopRight = ({rating, product, styles, currentStyle, onClick, skuList}) => {
  const [selectedSKU, setSelectedSKU] = useState()
  const [selectedQuantity, setSelectedQuantity] = useState()
  const [selectedSize, setSelectedSize] = useState()



  const sizeSelected = (e) => {
    // setSelectedSize(e.target.value)

    let menuSku = e.target.value.split(',')
    console.log(menuSku)
    setSelectedSKU(menuSku[0])
    setSelectedQuantity(menuSku[1])
    setSelectedSize(menuSku[2])
  }

  return (
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
      <div id='buttons-container'>
        <div id='buttons-select'>
          <Sizes skuList={skuList} sizeSelected={sizeSelected}/>
          <Quantity quantity={selectedQuantity}/>
        </div>
        <div id='buttons-add'>
          <AddToBag />
          <Watch />
        </div>
      </div>
    </div>
  )
}

const TopLeft = ({styles, currentStyle, image, setImage, changeView, view}) => (
  <div id='top-left'>
    <Carousel
      styles={styles}
      currentStyle={currentStyle}
      image={image}
      setImage={setImage}
      view={view}
      changeView={changeView}
    />
  </div>
)

const BottomHalf = ({product}) => (
  <div id='bottom-half'>
    <div id='bottom-left'>
      <Slogan product={product} />
      <Description product={product} />
    </div>
    <div id='bottom-right'>
      <Facts />
    </div>
  </div>
)

export default TopLeft
export {TopRight, BottomHalf}