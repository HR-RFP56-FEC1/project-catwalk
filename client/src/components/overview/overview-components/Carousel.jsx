import React from 'react'
import {useState} from 'react'
import styles from '../../../../sample/styles.js'

const Carousel = ({styleList}) => (
  <div id='main-image-container'>
    {/* {styleList.results[0].photos[0].url} */}
    <div id='thumbs-left-arrow-container'>
      <Thumbs styleList={styleList}/>
      <div id='arrow-column-left'>
        <div id='arrow-left'></div>
      </div>
    </div>
    <div id='arrow-column-right'>
      <div id='arrow-right'></div>
    </div>
  </div>
)

const Thumbs = ({styleList}) => {
  return (
    <div id='thumbs'>{styleList.results.map((style, i) => <Thumb key={i} thumb={style.photos[0].thumbnail_url}/>)}</div>
  )
}

const Thumb = ({thumb}) => (
  <img src={thumb} className='thumb'/>
)

export default Carousel
export {Thumbs, Thumb}