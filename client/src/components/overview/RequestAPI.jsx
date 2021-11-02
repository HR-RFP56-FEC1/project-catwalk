import React from 'react'
import axios from 'axios'
import key from '../../../../auth.js'

//use /api instead of url to hit server
const GetProductInformation = (id) => {
  let productInformation = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`,
    headers: { Authorization : key }
  }
  return productInformation
}

const GetProductStyles = (id) => {
    let productStyles = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`,
      headers: { Authorization : key }
    }
  return productStyles
}

const GetProductReviews = (id) => {
  let productReviews = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${id}`,
    headers: { Authorization : key }
  }
return productReviews
}


export default GetProductInformation
export { GetProductStyles, GetProductReviews }