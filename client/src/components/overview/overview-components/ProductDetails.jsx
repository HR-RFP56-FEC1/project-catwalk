import React from 'react'
import {useState} from 'react'

const Rating = () => (
  <div id='read-all-reviews'>
    <div><img src='img/stars.png' id='stars'/></div>
    <a><u>Read all reviews</u></a>
  </div>
)

const Details = ({product}) => (
  <div>
    <div id='category'><b>{product.category.toUpperCase()}</b></div>
    <div id='expanded'>{product.name}</div>
    <div id='price'><b>${product.default_price}</b></div>
    <div id='style-selected'><b>STYLE ></b> SELECTED STYLE</div>
  </div>
)

const Styles = ({styles}) => {
  return (
    <div id='styles'>{styles.results.map((style, i) => <Style key={i} style={styles.results[i]}/>)}</div>
  )
}

const Style = ({style}) => (
  <img src={style.photos[0].thumbnail_url} id='style'/>
)

export default Rating
export {Style, Styles, Details}