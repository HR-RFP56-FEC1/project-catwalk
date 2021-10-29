import React from 'react'
import { useState } from 'react'


const Thumbs = () => {
  const [thumbs, setThumbs] = useState([1, 2, 3, 4])
  console.log('THUMBS: ', thumbs)
  return (
    <div id='thumbs'>{thumbs.map((thumb, i) => <Thumb key={i} />)}</div>
  )
}

const Thumb = (props) => (
  <div className='thumb'>{props.i}T</div>
)


const Overview = () => (
  <div id='overview'>
    <div id='logo'>TESTING LOGO</div>
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