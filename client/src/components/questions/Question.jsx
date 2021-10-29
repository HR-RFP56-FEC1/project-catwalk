import React from 'react';
import AnswerList from './AnswerList.jsx';

const Question = () => (
  <div id='question1'>
    <div id='topbar'>
      <div id='questiontext'>WHAT IS A QUESTION?</div>
      <div id='questionHelpful'>HELPFUL VOTE AND DISPLAY</div>
      <div id='addAnswer'>ADD ANSWER BUTTON</div>
    </div>
    <div id='answerList'>
      <AnswerList />
    </div>
    <div id='questionLoadMoreAnswersbutton'>LOAD MORE ANSWERS</div>
  </div>
);

export default Question
