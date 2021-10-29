import React from 'react'
import {useState} from 'react'

const Rating = () => (
  <div id='read-all-reviews'>
    <div><img src='img/stars.png' id='stars'/></div>
    <a><u>Read all reviews</u></a>
  </div>
)

const Details = () => (
  <div>
    <div id='category'><b>CATEGORY</b></div>
    <div id='expanded'>Expanded Product Name</div>
    <div id='price'><b>$369</b></div>
    <div id='style-selected'><b>STYLE ></b> SELECTED STYLE</div>
  </div>
)

const Styles = () => {
  const [styles, setStyles] = useState([1, 2, 3, 4, 5, 6, 7, 8])
  return (
    <div id='styles'>{styles.map((style, i) => <Style key={i}/>)}</div>
  )
}

const Style = () => (
  <div id='style'></div>
)

export default Rating
export {Style, Styles, Details}