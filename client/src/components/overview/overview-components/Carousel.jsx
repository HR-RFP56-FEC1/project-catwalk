import React from 'react'
import {useState, useEffect} from 'react'
import styles from '../../../../sample/styles.js'
import Arrows from './NavigationArrows.jsx'
import interactions from '../../shared/interactions.js';

const Zoomed = ({styles, currentStyle, image, changeView, view}) => {

  const imageURL = styles.results[currentStyle].photos[image].url
  const [bgState, setbgState] = useState({backgroundImage: `url(${imageURL})`, backgroundPosition: '0%, 0%'})

  const zoomEffect = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    setbgState({backgroundImage: `url(${imageURL})`, backgroundPosition: `${x}% ${y}%`})
  }

  return (
    <div
      id='magnify-container'
      onMouseMove={zoomEffect}
      style={bgState}
      onClick={() => changeView(view, 'image')}
      >
      <img
        id='main-image-zoomed'
        src={imageURL}
      />
    </div>
  )
}

const Carousel = ({styles, currentStyle, image, setImage, view, changeView}) => {

  useEffect(() => {
    let thumbWindow = document.getElementById('thumbs')
    // if (styles.results[currentStyle].photos.length > 7) {
    //   thumbWindow = document.getElementById('thumbs-fadeout')
    // } else {
    //   thumbWindow = document.getElementById('thumbs')
    // }
    // window.scrollTo(0,document.body.scrollHeight);
    if (view === 'default') {
      let focusThumb = document.getElementById('thumb-highlight')
      if (image === styles.results[currentStyle].photos.length - 1) {
        thumbWindow.scrollTo(0, thumbs.scrollHeight)
      } else if (image === 0) {
        thumbWindow.scrollTo(0, 0)
      }
      else {
        focusThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start'})
      }
    }
  }, [image, view])

  const onClickThumb = (index) => {
    setImage(index)
    interactions("carousel", "overview");
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
    interactions("carousel", "overview");
  }

  return (
    <span id=
      {view === 'expanded' || view === 'magnify' ?
        'gallery-container-expanded-view' :
        'gallery-container-default-view'
      }
    >
      {view !== 'magnify' &&
      <img
        id='main-image'
        src={styles.results[currentStyle].photos[image].url}
        onClick={() => changeView(view, 'image')}
      />}
      {view === 'magnify' &&
      <Zoomed
        styles={styles}
        currentStyle={currentStyle}
        image={image}
        changeView={changeView}
        view={view}
      />}
      {view !== 'magnify' &&
        <img
          id={view === 'default' ? 'expand-icon' : 'collapse-icon'}
          src={view === 'default' ? 'img/expand.png' : 'img/collapse.png'}
          onClick={() => changeView(view, 'sizer')}
        />
      }
      <div id=
        {view === 'expanded' || view === 'magnify' ?
        'thumbs-outer-container-expanded' :
        'thumbs-outer-container'
        }
      >
      {view !== 'magnify' &&
        <Thumbs
          style={styles.results[currentStyle]}
          onClick={onClickThumb}
          image={image}
          view={view}
        />
      }
      </div>
      {view !== 'magnify' &&
      <Arrows onClickArrow={onClickArrow} view={view} />}
    </span>
  )
}

const Thumbs = ({style, onClick, image, view}) => {
  return (
    <div>
      <div id={(view ==='expanded' || view === 'magnify') ? 'thumbs-horizontal' : 'thumbs'}>
        {style.photos.map((photo, i) =>
        <Thumb
          key={i}
          thumb={photo.thumbnail_url}
          index={i}
          onClick={onClick}
          image={image}
          view={view}
        />)}
        {/* {style.photos.length > 7 && <div id='thumb-buffer-bottom'></div>} */}
      </div>
    </div>
  )
}

const Thumb = ({thumb, index, onClick, image, view}) => {
  let thumbid;
  if (view === 'default') {
    index === image ? thumbid = 'thumb-highlight' : thumbid = 'thumb'
  }
  else {
    index === image ? thumbid = 'thumb-highlight-expanded' : thumbid = 'thumb-expanded'
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