import React from 'react'
import axios from 'axios'
import key from '../../../../auth.js'

const GetProductInformation = (id) => {
  let productInformation = {
    method: 'get',
    url: `api/products/${id}`,
    headers: { Authorization : key }
  }
  return productInformation
}

const GetRelatedProducts = (id) => {
  let relatedProducts = {
    method: 'get',
    url: `api/products/${id}/related`,
    headers: { Authorization : key }
  }
  return relatedProducts
}

const GetProductStyles = (id) => {
    let productStyles = {
      method: 'get',
      url: `api/products/${id}/styles`,
      headers: { Authorization : key }
    }
  return productStyles
}

const GetProductReviews = (id) => {
  let productReviews = {
    method: 'get',
    url: `api/reviews/meta/?product_id=${id}`,
    headers: { Authorization : key }
  }
return productReviews
}

export default GetProductInformation
export { GetProductStyles, GetProductReviews, GetRelatedProducts }