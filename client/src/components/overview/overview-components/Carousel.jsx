import React from 'react'
import {useState, useEffect} from 'react'
import styles from '../../../../sample/styles.js'

const Carousel = ({styles, currentStyle, image, setImage, changeView}) => {
  useEffect(() => {
    let focusThumb = document.getElementById('thumb-highlight')
    focusThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start'})
  }, [image])

  const onClickThumb = (index) => {
    setImage(index)
  }

  const onClickArrow = (num) => {
    let newIndex;
    if (num === 1 && image === styles.results[currentStyle].photos.length - 1) {
      newIndex = 0
    } else if (num === -1 && image === 0) {
      newIndex = styles.results[currentStyle].photos.length - 1
    } else {
      newIndex = image + num
    }
    setImage(newIndex)
  }

  return (
    <div
      id='main-image-container'
      // width='800'
      // height='600'
      // display='flex'
      // flex-direction='row'
      // justify-content='space-between'
      // position='relative'
      // // overflow='hidden'
    >
      <img
        src={styles.results[currentStyle].photos[image].url}
        onClick={changeView}
        id='main-image'
        width='800'
        height='600'
      />
      <div id='thumbs-outer-container'>
        <Thumbs
          style={styles.results[currentStyle]}
          onClick={onClickThumb}
          image={image}
        />
      </div>
      <div id='arrow-left-bg'>
        <img
          src='./img/left-arrow.png'
          onClick={() => onClickArrow(-1)}
          id='arrow-left'
        />
      </div>
      <div id='arrow-right-bg'>
        <img
          src='./img/right-arrow.png'
          onClick={() => onClickArrow(1)}
          id='arrow-right'
        />
      </div>
    </div>
  )
}

const Thumbs = ({style, onClick, image}) => {
  return (
    <div id='thumbs'>
      {style.photos.map((photo, i) =>
      <Thumb
        key={i}
        thumb={photo.thumbnail_url}
        index={i}
        onClick={onClick}
        image={image}
      />)}
    </div>
  )
}
//if image === index, render the highlighted thumb
const Thumb = ({thumb, index, onClick, image}) => {
  let thumbid;
  if (index === image) {
    thumbid = 'thumb-highlight'
  } else {
    thumbid = 'thumb'
  }
  return (
    <div id='thumb-container'>
      <img
        // onClick={scrollToThumb}
        onClick={() => onClick(index)}
        src={thumb}
        id={thumbid}
      />
    </div>
  )
}

export default Carousel
export {Thumbs, Thumb}