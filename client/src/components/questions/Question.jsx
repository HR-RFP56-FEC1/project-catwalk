import React, { useState, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';
import axios from 'axios';

const Question = ({question}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);
  const handleReport = function(text) {
    setReported(!reported);
  };

  const openModal = function() {
    setIsOpen(true);
  };

  //#region helpful question vote functions
  const voteHelpful = function() {
    var urlString = '/api/qa/questions/' + question.question_id + '/helpful';
    return axios({
      method: 'put',
      url: urlString,
      responseType: 'json'
    });
  };
  
  const helpfulHelper = function() {
    setHelpful(true);
  };

  const handleHelpful = function(e) {
    e.preventDefault();
    if (!helpful) {
      voteHelpful().then(() => {
        helpfulHelper();
      });
    }
  }
  //#endregion

  //#region add answer functions
  const handleAddAnswer = function(e) {
    e.preventDefault();
    openModal();
  };

  //#endregion

  return (
    <div className='question'>
      <AddAnswerModal isOpen={modalIsOpen}/>
      <div className='questiontopbar'>
        <div className='questiontext'>Q:   {question.question_body}</div>
        <div className='questionHelpAdd'>
          <div className='questionHelpful'>Helpful? <a className='questionhelpfulvote' href="clickstuff" onClick={handleHelpful}>Yes</a> ({helpful ? (question.question_helpfulness + 1): question.question_helpfulness})   |{'\u00A0'} </div>
          <a className='addAnswer' href="clickstuff" onClick={handleAddAnswer}>Add Answer</a>
        </div>
      </div>
      <div className='answerList'>
        <AnswerList answers={question.answers}/>
      </div>
    </div>
  );
};
  


export default Question;
