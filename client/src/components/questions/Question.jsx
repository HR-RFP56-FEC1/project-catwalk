import React, { useState, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';
import axios from 'axios';
import interactions from '../shared/interactions.js';

const Question = ({question, product_id, productName}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  const openModal = function() {
    setModalIsOpen(true);
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
    interactions("reportAnswer", "questions");
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
    interactions("addAnswer", "questions");
    openModal();
  };
  //#endregion

  return (
    <div className='question'>
      <AddAnswerModal isOpen={modalIsOpen} question={question} product_id={product_id} setModalState={setModalIsOpen} productName={productName}/>
      <div className='questiontopbar'>
        <div className='questiontext'><div className='questiontextBigQ'>Q:</div>   <div className='questiontextBody'>{question.question_body}</div></div>
        <div className='questionHelpAdd'>
          <div className='questionHelpful'>Helpful?&nbsp; <a className='questionhelpfulvote' href="clickstuff" onClick={handleHelpful}>Yes</a> ({helpful ? (question.question_helpfulness + 1): question.question_helpfulness})   &nbsp;|{'\u00A0'}&nbsp;</div>
          <a className='addAnswer' href="clickstuff" onClick={handleAddAnswer}>Add Answer</a>
        </div>
      </div>
      <div className='answerListQ'>
        <AnswerList answers={question.answers}/>
      </div>
    </div>
  );
};

export default Question;
