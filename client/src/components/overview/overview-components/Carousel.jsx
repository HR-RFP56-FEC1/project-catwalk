import React from 'react'
import {useState} from 'react'
import styles from '../../../../sample/styles.js'

const Carousel = ({styles, currentStyle, image, setImage}) => {
  // const [image, setImage] = useState(0)

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
    <div id='main-image-container'>
      <img src={styles.results[currentStyle].photos[image].url}  id='main-image'/>
      <div id='thumbs-left-arrow-container'>
        <Thumbs
          style={styles.results[currentStyle]}
          onClick={onClickThumb}
          image={image}
        />
        <div id='arrow-container-left'>
          <div id='arrow-left-bg'>
            <div onClick={() => onClickArrow(-1)} id='arrow-left'>{'<'}</div>
          </div>
        </div>
      </div>
      <div id='arrow-container-right'>
        <div id='arrow-right-bg'>
          <div onClick={() => onClickArrow(1)}  id='arrow-right'>{'>'}</div>
        </div>
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
        onClick={() => onClick(index)}
        src={thumb}
        id={thumbid}
      />
    </div>
  )
}

export default Carousel
export {Thumbs, Thumb}