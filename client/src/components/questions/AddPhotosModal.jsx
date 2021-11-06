import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const AddPhotosModal = ({isOpen, question, setModalState, setPhotoUrls}) => {
  const [photos, setPhotos] = useState([]);
  const [inputUrl, setInputUrl] = useState('');

  const closeModal = function() {
    setModalState(false);
  };

  const postHandler = function() {
    let obj = {};
    obj.body = answerBody;
    obj.name = username;
    obj.product_id = product_id
    obj.email = email;
    console.log(obj);
    var urlString = '/api/qa/questions/';
    return axios({
      method: 'post',
      url: urlString,
      responseType: 'json',
      data: JSON.stringify(obj),
      headers: {'Content-Type': 'application/json'},
    });
  };

  const inputValidator = function() {

    let valid = true;
    let validBody = true;
    let validEmail = true;
    let validUsername = true;

    if (answerBody.trim().length === 0){
      valid = false;
      validBody = false;
    }
    if (email.trim().length === 0){
      valid = false;
      validEmail = false;
    } else {
      const reg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (!reg.test(email)) {
        valid = false;
        validEmail = false;
      }
    }
    if (username.trim().length === 0 ){
      valid = false;
      validUsername = false;
    }

    if (!valid) {
      let mess = "You must enter the following:";
      if (!validBody) {
        mess += "\nAnswer";
      }
      if (!validEmail) {
        mess += "\nEmail";
      }
      if (!validUsername) {
        mess += "\nUsername";
      }
      alert(mess);
      return false;
    }
      
    return true;
  };

  //#region input field state change handlers
  const handleInputUrlChange = function(e) {
    e.preventDefault();
    setInputUrl(e.target.value);
  };
  //#endregion


  const handleAddPhotoButton = function(e) {
    e.preventDefault();
    let temp = photos.slice();
    temp.push(inputUrl);
    setPhotos(temp);
    setInputUrl('');
  };

  const handleRemovePhotoButton = function(e) {
    e.preventDefault();
    let temp = photos.slice();
    temp.pop();
    setPhotos(temp);
  };

  const handleSubmitButton = function(e) {
    e.preventDefault();
    setPhotoUrls(photos);
    setModalState(false);
  };

  return ( isOpen ? (
    <div className='addModal'>
      <div className='addPhotosModal'>
        <div className='modalTopBar'>
          <div className='modalTitle'>Add Photos:</div>
        </div>
        <div className='modalInputsList'>
          <div className='modalPhotoThumbs'>
            <div className='modalInputLabel'>Photos:</div>
            {(photos && photos.length > 0) ? photos.map(
              (url, ind) => <img key={"photoUrl" + question.question_id + "_" + ind} className="photoThumbnail" src={url}/>
            ):false} 
          </div>
          <div className='modalInputListItem'>
            <div className='modalInputLabel'>Photo URL</div>
            <input type="text" value={inputUrl} onChange={handleInputUrlChange} maxLength="200" placeholder="Photo URL:"/>
          </div>
          <div className='modalInputListItem'>
            <input type="button" value="Add Photo" onClick={handleAddPhotoButton} />
          </div>
          <div className='modalInputListItem'>
            <input type="button" value="Remove Last Photo" onClick={handleRemovePhotoButton} />
          </div>
        </div>
        <div className='modalBottomBar'>
          <div className='modalInputListItem'>
            <input type="button" value="Submit Photos" onClick={handleSubmitButton} />
          </div>
          <div className='modalInputListItem'>
            <input type="button" value="Close/Cancel" onClick={closeModal} />
          </div>
        </div>
      </div>
    </div>
    ): false
  );
};
  
export default AddPhotosModal;


