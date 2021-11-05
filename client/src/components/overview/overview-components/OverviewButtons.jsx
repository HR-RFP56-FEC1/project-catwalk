import React, {useState, useEffect} from 'react'

const Sizes = ({stock, sizeSelected, handleClickSize}) => {

  return (
    <div id='size'>

      <label htmlFor="select-size"></label>

      <select onChange={handleClickSize} name="sizes" id="sizes">
        <option value={stock.length > 0 ? 'SELECT SIZE' : 'OUT OF STOCK'}>
          {stock.length > 0 ? 'SELECT SIZE' : 'OUT OF STOCK'}
        </option>
        {stock.map(sku => <Size key={sku[0]} sku={sku}/>)}

      </select>
    </div>
  )
}

const Size = ({sku}) => (
  <option value={sku}>{sku[2]}</option>
)

const Quantity = ({quantity, handleClickQuantity, selectedSize}) => {

  let quantityCount = []
  for (let i = 1; i <= quantity && i <= 15; i++) {
    quantityCount.push(i)
  }

  useEffect(()=> {
    let e = document.getElementById('quantities')
    if (e !== null) {
      e.value = '1'
    }
  }, [selectedSize])

  return (
    <div id='quantity'>

      <label htmlFor="select-quantity"></label>

      {quantity ?
        <select onChange={handleClickQuantity} name="quantities" id="quantities">
          {quantityCount.map((count, i) => <option value={count} key={i}>{count}</option>)}
        </select> :
        <select name="quantities" id="quantities-disabled" disabled>-
          <option>-</option>
        </select>
       }
    </div>
  )
}

const AddToBag = ({stock}) => (
  <div>
    {stock.length > 0 &&
    <button id='add-to-bag' type='submit'>
      <div>ADD TO BAG</div>
      <div>+</div>
    </button>}
  </div>
)

const Watch = () => (
  <div>
    <input id='watch' type='button' value='☆'></input>
  </div>
)

export default Sizes
export {Quantity, Watch, AddToBag}