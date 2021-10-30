import React from 'react'
import axios from 'axios'

let productid = 40344

const SetProductId = (id) => (
  productid = id
)

let productInformation = {
  method: 'get',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productid}`,
  headers: { Authorization : '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'}
}

let productStyles = {
  method: 'get',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productid}/styles`,
  headers: { Authorization : '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'}
}

const GetProductInformation = () => {
  return productInformation
}
const GetProductStyles = () => {
  return productStyles
}

export default GetProductInformation
export {GetProductStyles}