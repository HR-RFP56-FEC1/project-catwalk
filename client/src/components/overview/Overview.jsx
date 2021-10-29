import React from 'react'
import { useState } from 'react'


const Thumbs = () => {
  const [thumbs, setThumbs] = useState([1, 2, 3, 4, 5, 6, 7])
  console.log('THUMBS: ', thumbs)
  return (
    <div> Overview Box</div>
    // <div id='thumbs'>{thumbs.map(thumb => <div>thumb</div>)}</div>
  )
}

// const Thumb = () => (
//   <div className='thumb'>Thumb</div>
// )


const Overview = () => (
  <div id='overview'>
    <div id='logo'>TESTING LOGO</div>
    <div id='announcement'><i>SITE-WIDE ANNOUNCEMENT MESSAGE!</i> - SALE / DISCOUNT <b>OFFER</b> - <u>NEW PRODUCT HIGHLIGHT</u></div>
    <div id='body'>
      <div id='left'>
        <Thumbs />
        <div id='product'>
          <div id='photo'></div>
          <div id='description'></div>
        </div>
      </div>
      <div id='right'>
        <div id='details'></div>
        <div id='styles'></div>
        <div id='buttons'></div>
        <div id='bullet points'></div>
      </div>
    </div>
  </div>
)

export default Overview