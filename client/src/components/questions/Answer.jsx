import React from 'react';
import moment from 'moment';

const Answer = (props) => (
  <div className="answer" id='answerid'>
    <div className='answerbody'>{props.answer.body}</div>
    <div className='answerbottombor'>
      <div className='answerbyline'>by {props.answer.answerer_name}, {moment(props.answer.date).format('MMMM, D, YYYY')}</div>
      <div className='answerhelpful'>HELPFUL? Yes({props.answer.helpfulness})</div>
      <div className='asnwerreport'>REPORT</div>
    </div>
  </div>
);

export default Answer;
