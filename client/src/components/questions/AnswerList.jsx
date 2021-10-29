import React from 'react';
import Answer from './Answer.jsx';

const AnswerList = () => (
  <div className='answerList'>
    <div className="aList">
      <Answer/>
      <Answer/>
    </div>
    <div className='moreAnswersButton'>LOAD MORE ANSWERS</div>
  </div>
);

export default AnswerList
