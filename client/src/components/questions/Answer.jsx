import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

const Answer = (props) => {

  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);
  const handleReport = function(text) {
    setReported(!reported);
  };
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

  return (
    <div className="answer" id='answerid'>
      <div className='answerbody'>{props.answer.body}</div>
      <div className='answerbottombor'>
        <div className='answerbyline'>by {props.answer.answerer_name}, {moment(props.answer.date).format('MMMM, D, YYYY')}  |{'\u00A0'}</div>
        <div className='answerhelpful'>HELPFUL? <a className='answerhelpfulvote' href="clickstuff" onClick={handleHelpful}>Yes</a> ({props.answer.helpfulness})  |{'\u00A0'}</div>  
        <div className='asnwerreport'>REPORT</div>
      </div>
    </div>
  );
  
};

export default Answer;
