import React, {useState, useEffect} from 'react'
import Stars from '../shared/Stars.jsx'
import axios from 'axios'
import key from '../../../../auth.js'
import CalculateRating from '../shared/CalculateRating.jsx'

const RelatedProducts = ({related, handleProductChange}) => (
  <div className='related-products-container'>
    {related && related.map((id, i) => <ProductCard key={i} id={id} handleProductChange={handleProductChange}/>)}
  </div>
)

const ProductCard = ({id, handleProductChange}) => {
  const [cardInfo, setCardInfo] = useState()
  const [cardStyle, setCardStyle] = useState()
  const [cardReview, setCardReview] = useState()

  useEffect(()=>{
    axios(`api/products/${id}`)
    .then(response => {
      setCardInfo(response.data)
    })
    .catch(err => {
      console.log(err)
    })

    axios(`api/products/${id}/styles`)
    .then(response => {
      setCardStyle(response.data)
    })
    .catch(err => {
      console.log(err)
    })

    axios(`api/reviews/meta/?product_id=${id}`)
    .then(response => {
      setCardReview(response.data)
    })
    .catch(err => {
      console.log('Error on GET: ' + err)
    })

  }, [id])

  if (cardInfo && cardStyle && cardReview) {
    return (
      <div onClick={()=> handleProductChange(id)} className='product-card'>
        <RelatedImage image={cardStyle.results[0].photos[0].thumbnail_url}/>
        <ProductCategory category={cardInfo.category}/>
        <ProductName name={cardInfo.name}/>
        <RelatedPrice price={cardInfo.default_price}/>
        <div className='stars-container'>
          <Stars rating={CalculateRating(cardReview)}/>
        </div>
      </div>
    )
  } else return <div></div>
}

const RelatedProductTitle = () => (
  <div className='related-products-title' style={ {fontSize:"larger", marginBottom:"10px" }}>RELATED PRODUCTS</div>
)

const YourOutfit = () => (
  <div className='your-outfit-container'></div>
)

const RelatedImage = ({image}) => (
  <div className='related-image'>
    <img className='related-image' src={image}/>
  </div>
)

const ProductCategory = ({category}) => (
  <div className='related-product-category'>{category.toUpperCase()}</div>
)

const ProductName = ({name}) => (
  <div className='related-product-name'>{name}</div>
)

const RelatedPrice = ({price}) => (
  <div className='related-price'>{price}</div>
)

const Related = ({id, handleProductChange}) => {
  const [related, setRelated] = useState()

  useEffect(() => {
    axios.get(`api/products/${id}/related`)
    .then(response => {
      setRelated(response.data)
    })
    .catch(err => {
      console.log(err)
    })

  }, [id])

  return (
    <div className='related-container'>
      <RelatedProductTitle />
      <RelatedProducts
        related={related}
        handleProductChange={handleProductChange}
      />
      <YourOutfit />
    </div>
  )
}

export default Related