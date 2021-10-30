import React from 'react'
import {useState} from 'react'
import styles from '../../../../sample/styles.js'

const Carousel = ({styles}) => (
  <div id='main-image-container'>
    <img src={styles.results[0].photos[0].url}  id='main-image'/>
    <div id='thumbs-left-arrow-container'>
      <Thumbs styles={styles}/>
      <div id='arrow-column-left'>
        <div id='arrow-left'></div>
      </div>
    </div>
    <div id='arrow-column-right'>
      <div id='arrow-right'></div>
    </div>
  </div>
)

const Thumbs = ({styles}) => {
  return (
    <div id='thumbs'>{styles.results.map((style, i) => <Thumb key={i} thumb={style.photos[0].thumbnail_url}/>)}</div>
  )
}

const Thumb = ({thumb}) => (
  <img src={thumb} className='thumb'/>
)

export default Carousel
export {Thumbs, Thumb}