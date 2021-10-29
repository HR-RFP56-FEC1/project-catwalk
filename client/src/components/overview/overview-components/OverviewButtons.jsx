import React from 'react'
import {useState} from 'react'

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

export default Size
export {Quantity, Watch, AddToBag}