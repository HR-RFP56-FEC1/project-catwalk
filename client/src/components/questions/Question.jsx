import React from 'react';
import AnswerList from './AnswerList.jsx';

const Question = (props) => (
  <div id='question1'>
    <div className='questiontopbar'>
      <div className='questiontext'>Q: {props.question.question_body}</div>
      <div className='questionHelpAdd'>
        <div className='questionHelpful'>HELPFUL VOTE </div>
        <div className='addAnswer'>ADD ANSWER</div>
      </div>
    </div>
    <div className='answerList'>
      <AnswerList answers={props.question.answers}/>
    </div>
  </div>
);

export default Question;
