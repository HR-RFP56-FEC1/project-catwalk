import React, { useState, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';
import axios from 'axios';

const Question = ({question}) => {

  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);
  const handleReport = function(text) {
    setReported(!reported);
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

  return (
    <div className='question'>
      <div className='questiontopbar'>
        <div className='questiontext'>Q:   {question.question_body}</div>
        <div className='questionHelpAdd'>
          <div className='questionHelpful'>Helpful? <a className='questionhelpfulvote' href="clickstuff" onClick={handleHelpful}>Yes</a> ({question.question_helpfulness})   |{'\u00A0'} </div>
          <div className='addAnswer'>Add Answer</div>
        </div>
      </div>
      <div className='answerList'>
        <AnswerList answers={question.answers}/>
      </div>
    </div>
  );
};
  


export default Question;
