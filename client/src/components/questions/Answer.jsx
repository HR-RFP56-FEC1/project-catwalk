import React from 'react';

const Answer = (props) => (
  <div className="answer" id='answerid'>
    <div className='answerbody'>{props.answer.body}</div>
    <div className='answerbottombor'>
      <div className='answerbyline'>by {props.answer.answerer_name}, {props.answer.date}</div>
      <div className='answerhelpful'>HELPFUL? Yes({props.answer.helpfulness})</div>
      <div className='asnwerreport'>REPORT</div>
    </div>
  </div>
);

export default Answer;
