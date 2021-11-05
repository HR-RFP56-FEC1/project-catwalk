import React from 'react'
import {useState} from 'react'

const Sizes = ({skuList, sizeSelected}) => {

  const stock = []

  for (let sku in skuList) {
    let stockDetails = [
      sku,
      skuList[sku].quantity,
      skuList[sku].size
    ]
    stock.push(stockDetails)
  }

  return (
    <div id='size'>

      <label htmlFor="select-size"></label>

      <select  onChange={sizeSelected} name="sizes" id="sizes">
        <option value="SELECT SIZE">SELECT SIZE</option>
        {stock.map(sku => <Size key={sku[0]} sku={sku}/>)}

      </select>
    </div>
  )
}

const Size = ({sku}) => (
  <option value={sku}>{sku[2]}</option>
)

const Quantity = ({quantity}) => {

  let quantityCount = []
  for (let i = 0; i < quantity && i < 15; i++) {
    quantityCount.push(i)
  }

  return (
    <div id='quantity'>

      <label htmlFor="select-quantity"></label>

      <select name="quantities" id="quantities">
        {!quantity ?
          <option value="1">1</option> :
          quantityCount.map((count, i) => <option value={count} key={i}>{count}</option>)
        }
      </select>
    </div>
  )
}

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

export default Sizes
export {Quantity, Watch, AddToBag}