import React from 'react'
import {useState} from 'react'

const Carousel = () => (
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
)

const Thumbs = () => {
  const [thumbs, setThumbs] = useState([1, 2, 3, 4])
  return (
    <div id='thumbs'>{thumbs.map((thumb, i) => <Thumb key={i} />)}</div>
  )
}

const Thumb = (props) => (
  <div className='thumb'>{props.i}T</div>
)

export default Carousel
export {Thumbs, Thumb}