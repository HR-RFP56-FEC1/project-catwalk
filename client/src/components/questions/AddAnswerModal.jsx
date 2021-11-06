import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const AddAnswerModal = ({isOpen, productName, question, setModalState, product_id}) => {
  const [answerBody, setAnswerBody] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [photos, setPhotos] = useState([]);

  const closeModal = function() {
    setModalState(false);
  };

  const postHandler = function() {
    let obj = {};
    obj.body = answerBody;
    obj.name = username;
    obj.email = email;
    if (photos && photos.length > 0) {
      obj.photos = photos;
    }
    console.log(obj);
    var urlString = '/api/qa/questions/' + question.question_id + '/answers';
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
  const handleBodyChange = function(e) {
    e.preventDefault();
    setAnswerBody(e.target.value);
  };

  const handleEmailChange = function(e) {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleUsernameChange = function(e) {
    e.preventDefault();
    setUsername(e.target.value);
  };
  //#endregion

  const handleSubmitButton = function(e) {
    e.preventDefault();
    if (inputValidator()) {
      postHandler().then((res) => {
        console.log(res);
        alert("Submission Added");
        closeModal();
      }
      )}
  };

  const tempFunction = function() {
    
  };

  return ( isOpen ? (
      <div className='addAnswerModal'>
        <div className='addAnswerTopBar'>
          <div className='addAnswerTitle'>Submit your Answer</div>
          <div className='addAnswerSubTitle'>{productName}: {question.question_body}</div>
        </div>
        <div className='modalInputsList'>
          <div className='modalInputListItem'>
            <div className='modalInputLabel'>Your Answer*</div>
            <textarea type="text" value={answerBody} onChange={handleBodyChange} maxLength="1000" placeholder="Have a question? Search for answers…"/>
          </div>
          <div className='modalInputListItem'>
            <div className='modalInputLabel'>What is your nickname?*</div>
            <input type="text" value={username} onChange={handleUsernameChange} maxLength="60" placeholder="Have a question? Search for answers…"/>
            <div>For privacy reasons, do not use your full name or email address</div>
          </div>
          <div className='modalInputListItem'>
            <div className='modalInputLabel'>What is your email?*</div>
            <input type="email" value={email} onChange={handleEmailChange} maxLength="60" placeholder="Have a question? Search for answers…"/>
            <div>For authentication reasons, you will not be emailed</div>
          </div>
          <div className='modalInputListItem'>
            <input type="button" value="Upload your photos" onClick={tempFunction} />
          </div>
          <div className='modalInputListItem'>
            <input type="button" value="Submit answer" onClick={handleSubmitButton} />
          </div>
        </div>
        <div className='modalBottomBar'>
          <div className='modalInputListItem'>
            <input type="button" value="Close/Cancel" onClick={closeModal} />
          </div>
        </div>
      </div>
    ): false
  );
};
  
export default AddAnswerModal;


