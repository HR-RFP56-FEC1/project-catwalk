import React from 'react'
import {useState} from 'react'

const Rating = () => (
  <div id='read-all-reviews'>
    <div><img src='img/stars.png' id='stars'/></div>
    <a><u>Read all reviews</u></a>
  </div>
)

const Details = ({productDetails}) => (
  <div>
    <div id='category'><b>{productDetails.category.toUpperCase()}</b></div>
    <div id='expanded'>{productDetails.name}</div>
    <div id='price'><b>${productDetails.default_price}</b></div>
    <div id='style-selected'><b>STYLE ></b> SELECTED STYLE</div>
  </div>
)

const Styles = ({styleList}) => {
  const [styles, setStyles] = useState(styleList.results)
  return (
    <div id='styles'>{styles.map((style, i) => <Style key={i} style={styleList.results[i]}/>)}</div>
  )
}

const Style = ({style}) => (
  <img src={style.photos[0].thumbnail_url} id='style'/>
)

export default Rating
export {Style, Styles, Details}