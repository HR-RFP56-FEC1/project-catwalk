import React from 'react'
import axios from 'axios'


const GetProductInformation = (id) => {
  let productInformation = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`,
    headers: { Authorization : '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'}
  }
  return productInformation
}

const GetProductStyles = (id) => {
    let productStyles = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`,
      headers: { Authorization : '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'}
    }
  return productStyles
}

export default GetProductInformation
export {GetProductStyles}