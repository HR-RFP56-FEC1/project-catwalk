import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

const Answer = (props) => {

  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  //#region helpful answer vote functions
  const voteHelpful = function() {
    var urlString = '/api/qa/answers/' + props.answer.id + '/helpful';
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

  //#region report functions
  const reportAnswer = function() {
    var urlString = '/api/qa/answers/' + props.answer.id + '/report';
    return axios({
      method: 'put',
      url: urlString,
      responseType: 'json'
    });
  };
  
  const reportedHelper = function() {
    setReported(true);
  };

  const handleReport= function(e) {
    e.preventDefault();
    if (!reported) {
      reportAnswer().then(() => {
        reportedHelper();
      });
    }
  }
  //#endregion

  return (
    <div className="answer" id='answerid'>
      <div className='answerBody'>{props.answer.body}</div>
      <div className='answerBottomBar'>
        <div className='answerByLine'>by {props.answer.answerer_name}, {moment(props.answer.date).format('MMMM, D, YYYY')}  |{'\u00A0'}</div>
        <div className='answerHelpful'>Helpful? <a className='answerHelpfulVote' href="clickstuff" onClick={handleHelpful}>Yes</a> ({props.answer.helpfulness})  |{'\u00A0'}</div>  
        <div className='answerReport'><a className='answerReportLink' href="clickstuff" onClick={handleReport}>Yes</a></div>
      </div>
    </div>
  );
  
};

export default Answer;
