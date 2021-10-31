import React from 'react'
import {useState} from 'react'
import styles from '../../../../sample/styles.js'

const Carousel = ({styles, currentStyle}) => {
  const [image, setImage] = useState(0)

  const onClickThumb = (index) => {
    setImage(index)
  }

  const onClickArrow = (num) => {
    let newIndex;
    if (num === 1 && image === styles.results.length - 1) {
      newIndex = 0
    } else if (num === -1 && image === 0) {
      newIndex = styles.results.length - 1
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

const Thumbs = ({style, onClick}) => {
  return (
    <div id='thumbs'>
      {style.photos.map((photo, i) =>
      <Thumb
        key={i}
        thumb={photo.thumbnail_url}
        index={i}
        onClick={onClick}
      />)}
    </div>
  )
}

const Thumb = ({thumb, index, onClick}) => (
  <img
    onClick={() => onClick(index)}
    src={thumb}
    className='thumb'
  />
)

export default Carousel
export {Thumbs, Thumb}