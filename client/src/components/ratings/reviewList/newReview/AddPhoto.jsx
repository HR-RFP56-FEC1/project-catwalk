import React, {useState, useEffect} from 'react';

import characteristics from './characteristics.js';
import CharacterRadio from './CharacterRadio.jsx';

const AddReviewPhotoBtn = (props) => {
  const[urlModal, setUrlModal] = useState(false);
  // const[url, setUrl] = useState(null);

  const addPhoto = (e) => {
    e.preventDefault;
    // console.log(e.target);
    setUrlModal(true);
  }

  const removePhoto = (e) => {
    e.preventDefault;
    props.onChange(null, props.photoId)
  }

  const addUrl = () => {
    let urlAdded = document.getElementById("add-photo-url").querySelector("input").value;
    props.onChange(urlAdded, props.photoId);
    setUrlModal(false);
  }

  return (
    <div id="add-review-photo">
      {
        props.url ?
        <div id="photo-container">
          <img src={props.url} id="review-photo-thumbnail"></img>
          <div id="remove-photo" onClick={removePhoto}>
            &#9447;
          </div>
        </div>

        :
        <div id="add-photo-icon" style={{ fontSize: "5vh" }}
          onClick={addPhoto}>
          +
        </div>
      }
      {
        urlModal &&
        <div className="modalBackground">
          <div id="add-photo-url">
            Photo URL:&nbsp;&nbsp;
            <input type="text" name="photo-url" placeholder='Example: "http://placecorgi.com/260"'
            style={ {width:"60%"} }></input>
            &nbsp;
            <button id="add-photo-url-btn"
              onClick={addUrl}>Add</button>
            <button id="close-photo-url-btn"
              onClick={()=>{setUrlModal(false)}}>Cancel</button>
          </div>
        </div>
      }
    </div>
  )
}

export default AddReviewPhotoBtn;