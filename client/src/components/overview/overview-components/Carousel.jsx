import React from 'react'
import {useState, useEffect} from 'react'
import styles from '../../../../sample/styles.js'
import Arrows from './NavigationArrows.jsx'

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

  // onClickMagnify = () => {

  // }

  return (
    <span id=
      {view === 'expanded' || view === 'magnify' ?
        'gallery-container-expanded-view' :
        'gallery-container-default-view'
      }
    >
      <img
        id={
          view === 'default' || view === 'expanded' ?
          'main-image' :
          'main-image-zoomed'}
        src={styles.results[currentStyle].photos[image].url}
        onClick={() => changeView(view)}
      />
      {view !== 'magnify' &&
        <img
          id={view === 'default' ? 'expand-icon' : 'collapse-icon'}
          src={view === 'default' ? 'img/expand.png' : 'img/collapse.png'}
          onClick={() => changeView(view)}
        />
      }
      <div id=
        {view === 'expanded' || view === 'magnify' ?
        'thumbs-outer-container-expanded' :
        'thumbs-outer-container'
        }
      >
        <Thumbs
          style={styles.results[currentStyle]}
          onClick={onClickThumb}
          image={image}
          view={view}
        />
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
        {style.photos.length > 7 && <div id='thumb-buffer-bottom'></div>}
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


// / Extract the URL
// zoomBoxes.forEach(function(image) {
//   var imageCss = window.getComputedStyle(image, false),
//     imageUrl = imageCss.backgroundImage
//                        .slice(4, -1).replace(/['"]/g, '');

//   // Get the original source image
//   var imageSrc = new Image();
//   imageSrc.onload = function() {
//     var imageWidth = imageSrc.naturalWidth,
//         imageHeight = imageSrc.naturalHeight,
//         ratio = imageHeight / imageWidth;

//     // Adjust the box to fit the image and to adapt responsively
//     var percentage = ratio * 100 + '%';
//     image.style.paddingBottom = percentage;

//     // Zoom and scan on mousemove
//     image.onmousemove = function(e) {
//       // Get the width of the thumbnail
//       var boxWidth = image.clientWidth,
//           // Get the cursor position, minus element offset
//           x = e.pageX - this.offsetLeft,
//           y = e.pageY - this.offsetTop,
//           // Convert coordinates to % of elem. width & height
//           xPercent = x / (boxWidth / 100) + '%',
//           yPercent = y / (boxWidth * ratio / 100) + '%';

//       // Update styles w/actual size
//       Object.assign(image.style, {
//         backgroundPosition: xPercent + ' ' + yPercent,
//         backgroundSize: imageWidth + 'px'
//       });
//     };

//     // Reset when mouse leaves
//     image.onmouseleave = function(e) {
//       Object.assign(image.style, {
//         backgroundPosition: 'center',
//         backgroundSize: 'cover'
//       });
//     };
//   }
//   imageSrc.src = imageUrl;
// });