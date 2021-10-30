import React from 'react'
import {useState} from 'react'
import styles from '../../../../sample/styles.js'

//make a setState for photos[0] like photos[currentPhoto]
//initialize it to 0
const Carousel = ({styles, currentStyle}) => (
  <div id='main-image-container'>
    <img src={styles.results[currentStyle].photos[0].url}  id='main-image'/>
    <div id='thumbs-left-arrow-container'>
      <Thumbs style={styles.results[currentStyle]}/>
      <div id='arrow-container-left'>
        <div id='arrow-left-bg'>
          <div id='arrow-left'>{'<'}</div>
        </div>
      </div>
    </div>
    <div id='arrow-container-right'>
      <div id='arrow-right-bg'>
        <div id='arrow-right'>{'>'}</div>
      </div>
    </div>
  </div>
)

const Thumbs = ({style}) => {
  return (
    <div id='thumbs'>{style.photos.map((photo, i) => <Thumb key={i} thumb={photo.thumbnail_url}/>)}</div>
  )
}

const Thumb = ({thumb}) => (
  <img src={thumb} className='thumb'/>
)

export default Carousel
export {Thumbs, Thumb}