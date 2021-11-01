import React from 'react'
import axios from 'axios'
import key from '../../../../auth.js'


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

export default GetProductInformation
export {GetProductStyles}