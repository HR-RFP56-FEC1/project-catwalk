import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const AddAnswerModal = ({isOpen, productName, questionBody}) => {
  const [answerBody, setAnswerBody] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [modalOpen, setModalOpen] = useState(isOpen);



  const voteHelpful = function() {
    var urlString = '/api/qa/questions/' + question.question_id + '/helpful';
    return axios({
      method: 'put',
      url: urlString,
      responseType: 'json'
    });
  };

  const tempFunction = function() {
    
  };

  return (
    <Modal isOpen={isOpen}>
      <div className='addAnswerModal'>
        <div className='addAnswerTopBar'>
          <div className='addAnswerTitle'>Submit your Answer</div>
          <div className='addAnswerSubTitle'>[Product Name]: [Question Body]</div>
        </div>
        <div className='modalInputsList'>
          <div className='modalInputListItem'>
            <div className='modalInputLabel'>Your Answer</div>
            <input type="text" value={answerBody} onChange={tempFunction} placeholder="Have a question? Search for answers…"/>
          </div>
          <div className='modalInputListItem'>
            <div className='modalInputLabel'>What is your nickname?</div>
            <input type="text" value={username} onChange={tempFunction} placeholder="Have a question? Search for answers…"/>
          </div>
          <div className='modalInputListItem'>
            <div className='modalInputLabel'>What is your email?</div>
            <input type="text" value={email} onChange={tempFunction} placeholder="Have a question? Search for answers…"/>
          </div>
          <div className='modalInputListItem'>
            <input type="button" value="Upload your photos" onClick={tempFunction} />
          </div>
          <div className='modalInputListItem'>
            <input type="button" value="Submit answer" onClick={tempFunction} />
          </div>
        </div>
        <div className='modalBottomBar'>
          <div className='modalInputListItem'>
            <input type="button" value="Close/Cancel" onClick={tempFunction} />
          </div>
        </div>
      </div>
    </Modal>
  );
};
  
export default AddAnswerModal;


