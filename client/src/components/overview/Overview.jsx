import React from 'react'
import { useState } from 'react'

const Thumbs = () => {
  const [thumbs, setThumbs] = useState([1, 2, 3, 4])
  return (
    <div id='thumbs'>{thumbs.map((thumb, i) => <Thumb key={i} />)}</div>
  )
}

const Thumb = (props) => (
  <div className='thumb'>{props.i}T</div>
)

const Rating = () => (
  <div id='read-all-reviews'>
    <div><img src='img/stars.png' id='stars'/></div>
    <a><u>Read all reviews</u></a>
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

const Size = () => (
  <div id='size'>

    <label htmlFor="select-size"></label>

    <select name="sizes" id="sizes">
      <option value="SELECT SIZE">SELECT SIZE</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  </div>
)

const Quantity = () => (
  <div id='quantity'>

    <label htmlFor="select-quantity"></label>

    <select name="quantities" id="quantities">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  </div>
)

const AddToBag = () => (
  <div>
    <button id='add-to-bag' type='submit'>
      <div>ADD TO BAG</div>
      <div>+</div>
    </button>
  </div>
)

const Watch = () => (
  <div>
    <input id='watch' type='button' value='☆'></input>
  </div>
)

const Facts = () => {
  const [facts, setFacts] = useState([1, 2, 3, 4])
  return (
    <div>
      {facts.map((fact, i) => <Fact key={i} />)}
    </div>
  )
}

const Fact = () => (
  <div className='fact'>✓ Some interesting fact</div>
)

const Overview = () => (
  <div id='overview'>
    <div id='logo'>LOGO</div>
    <div id='announcement'><i>SITE-WIDE ANNOUNCEMENT MESSAGE!</i> - SALE / DISCOUNT <b>OFFER</b> - <u>NEW PRODUCT HIGHLIGHT</u></div>
    <div id='body'>

      <div id='left'>
        <div id='main-image'>
          <div id='thumbs-left-arrow-container'>
            <Thumbs />
            <div id='arrow-column-left'>
              <div id='arrow-left'></div>
            </div>
          </div>
          <div id='arrow-column-right'>
            <div id='arrow-right'></div>
          </div>
        </div>
        <div id='description-container'>
          <div id='description-spacer'></div>
          <div id='description'>
            <div>ITEM DESCRIPTION</div>
          </div>
        </div>
      </div>

      <div id='right'>
        <Rating />
        <div id='category'><b>CATEGORY</b></div>
        <div id='expanded'>Expanded Product Name</div>
        <div id='price'><b>$369</b></div>
        <div id='style-selected'><b>STYLE ></b> SELECTED STYLE</div>
        <Styles />
        <div id='buttons-select'>
          <Size />
          <Quantity />
        </div>
        <div id='buttons-add'>
          <AddToBag />
          <Watch />
        </div>
        <div id='bullet points'>
          <Facts />
        </div>
      </div>
    </div>
  </div>
)

export default Overview