import React, {useState, useEffect} from 'react'
import Stars from '../shared/Stars.jsx'
import axios from 'axios'
import key from '../../../../auth.js'
import GetProductInformation from '../overview/RequestAPI.jsx'

const RelatedProducts = ({related}) => (
  <div className='related-products-container'>
    {related && related.map((id, i) => <ProductCard key={i} id={id}/>)}
  </div>
)

const ProductCard = ({id}) => {

  const [cardInfo, setCardInfo] = useState()
  useEffect(()=>{
    axios(GetProductInformation(id))
    .then(response => {
      setCardInfo(response.data)
      console.log(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [id])

  if (cardInfo) {
    return (
      <div className='product-card'>
        <RelatedImage />
        <ProductCategory category={cardInfo.category}/>
        <ProductName name={cardInfo.name}/>
        <RelatedPrice price={cardInfo.default_price}/>
        <div className='stars-container'>
          <Stars rating={4.5}/>
        </div>
      </div>
    )
  } else return <div></div>
}

const RelatedProductTitle = () => (
  <div className='related-products-title'>RELATED PRODUCTS</div>
)

const YourOutfit = () => (
  <div className='your-outfit-container'></div>
)


const RelatedImage = () => (
  <div className='related-image'></div>
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

const Related = ({id}) => {
  const [related, setRelated] = useState()

  //do /products/:product_id/related GET
  //make a card for each id in array
  //each card does /products/:product_id GET


  useEffect(() => {
    axios.get(`api/products/${id}/related`, {
      method: 'get',
      url: `api/products/${id}/related`,
      headers: { Authorization : key }
    })
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
      <RelatedProducts related={related}/>
      <YourOutfit />
    </div>
  )
}

export default Related