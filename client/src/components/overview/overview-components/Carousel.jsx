import React from 'react'
import {useState} from 'react'
import styles from '../../../../sample/styles.js'

//make a setState for photos[0] like photos[currentPhoto]
//initialize it to 0
const Carousel = ({styles, currentStyle}) => {
  const [image, setImage] = useState(0)

  const onClickThumb = (index) => {
    setImage(index)
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