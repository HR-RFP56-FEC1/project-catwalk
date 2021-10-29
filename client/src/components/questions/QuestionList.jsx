import React from 'react';
import Question from './Question.jsx';

const QuestionList = () => (
  <div className='questionList'>
    <div className='qList'>
      <Question/>
      <Question/>
    </div>
    <div className='qListBottomBar'>
      <div className='moreQuestions'>MORE ANSWERED QUESTIONS</div>
      <div className='addQuestion'>ADD A QUESTION</div>
    </div>
  </div>
);

export default QuestionList
