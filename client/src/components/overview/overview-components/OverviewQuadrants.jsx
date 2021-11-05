import React, {useState} from 'react'
import Carousel, {Thumbs, Thumb} from './Carousel.jsx'
import Rating, {Style, Styles, Details} from './ProductDetails.jsx'
import Sizes, {Quantity, Watch, AddToBag} from './OverviewButtons.jsx'
import Facts, {Fact, Slogan, Description} from './ProductDescription.jsx'

const TopRight = ({rating, product, styles, currentStyle, onClick, skuList}) => {
  const [selectedSKU, setSelectedSKU] = useState()
  const [selectedSize, setSelectedSize] = useState()
  const [availableQuantities, setAvailableQuantities] = useState()
  const [selectedQuantity, setSelectedQuantity] = useState()

  const stock = []

  for (let sku in skuList) {
    let stockDetails = [
      sku,
      skuList[sku].quantity,
      skuList[sku].size
    ]
    if (stockDetails[1] > 0) {
      stock.push(stockDetails)
    }
  }

  const handleClickSize = (e) => {

    let menuSku = e.target.value.split(',')
    setSelectedSKU(menuSku[0])
    setSelectedSize(menuSku[2])
    setSelectedQuantity('1')
    //whats up with XL twice?

    setAvailableQuantities(menuSku[1])
  }

  const handleClickQuantity = (e) => {
    //THIS IS A STRING - DO WE WANT THAT?
    setSelectedQuantity(e.target.value)
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
          <Sizes
            stock={stock}
            handleClickSize={handleClickSize}
            selectedSize={selectedSize}
          />
          <Quantity
            quantity={availableQuantities}
            handleClickQuantity={handleClickQuantity}
            selectedSize={selectedSize}
          />
        </div>
        <div id='buttons-add'>
          <AddToBag stock={stock}/>
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