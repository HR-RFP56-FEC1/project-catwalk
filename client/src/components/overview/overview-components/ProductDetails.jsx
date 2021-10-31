import React from 'react'
import {useState} from 'react'

const Rating = () => (
  <div id='read-all-reviews'>
    <div><img src='img/stars.png' id='stars'/></div>
    <a><u>Read all reviews</u></a>
  </div>
)

const Details = ({product, styles, currentStyle}) => (
  <div>
    <div id='category'><b>{product.category.toUpperCase()}</b></div>
    <div id='expanded'>{product.name}</div>
    <Price styles={styles} currentStyle={currentStyle} />
    <div id='style-selected'><b>{'STYLE > '}</b>{styles.results[currentStyle].name.toUpperCase()}</div>
  </div>
)

const Price = ({ styles, currentStyle }) => {
  if (styles.results[currentStyle].sale_price !== null) {
    return (
      <div id='sale-price-container'>
        <div id='sale-price'>
          {'$'}{styles.results[currentStyle].sale_price}{' '}
        </div>
        <div id='price-struck-through'>
          {'$'}{styles.results[currentStyle].original_price}
        </div>
      </div>
    )
  } else {
    return (
      <div id='price'>
        {'$'}{styles.results[currentStyle].original_price}
      </div>
    )
  }
}


const Styles = ({styles, onClick}) => (
  <div id='styles'>
    {styles.results.map((style, i) =>
      <Style
        key={i}
        styleNumber={i}
        style={styles.results[i]}
        onClick={onClick}
      />)}
  </div>
)


const Style = ({style, styleNumber, onClick}) => (
  <img
    onClick={()=>{onClick(styleNumber)}}
    src={style.photos[0].thumbnail_url}
    id='style'
  />
)

export default Rating
export {Style, Styles, Details}