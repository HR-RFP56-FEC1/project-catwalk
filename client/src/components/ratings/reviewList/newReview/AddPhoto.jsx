import React, {useState, useEffect} from 'react';

import characteristics from './characteristics.js';
import CharacterRadio from './CharacterRadio.jsx';

const AddReviewPhotoBtn = (props) => {
  const onClick = (e) => {
    e.preventDefault;
    console.log(e.target);
  }

  const previewFile = function () {
    var preview = document.getElementById("new-review-add-photo").querySelector('img');
    var file    = document.getElementById("new-review-add-photo").querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }

  return (
    <form id="add-review-photo" onClick={onClick}>
      {/* <div id="add-photo-icon" style={{ fontSize: "5vh" }}>
        +
      </div> */}
      <input id="review-photo-file" type="file"
        onChange={previewFile}/>
      <img src="" style={ {maxHeight:"100%", objectFit:"cover"} } alt="Image preview..."></img>
    </form>
  )
}

export default AddReviewPhotoBtn;