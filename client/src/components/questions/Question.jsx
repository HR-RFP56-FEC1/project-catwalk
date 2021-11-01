import React from 'react';
import AnswerList from './AnswerList.jsx';

const Question = (props) => (
  <div id='question1'>
    <div id='topbar'>
      <div className='questiontext'>{props.question.question_body}</div>
      <div className='questionHelpful'>HELPFUL VOTE AND DISPLAY</div>
      <div className='addAnswer'>ADD ANSWER BUTTON</div>
    </div>
    <div className='answerList'>
      <AnswerList answers={props.question.answers}/>
    </div>
  </div>
);

export default Question;
