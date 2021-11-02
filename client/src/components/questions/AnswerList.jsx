import React from 'react';
import Answer from './Answer.jsx';
import questions from '../../../sample/questions.js';

// answers come in as object
// properties of obj are answer objects
// keys are answer ids
// sort by helpfulness
// if username === seller, put at top
const sortAnswers = function(answersObj) {
  var sorted = [];

  var ids = Object.keys(answersObj);

  if (ids.length > 0) {
    sorted.push(answersObj[ids[0]]);
    for (var i = 1; i < ids.length; i++) {
      var inserted = false;
      for (var j = 0; j < sorted.length; j++) {
        if (answersObj[ids[i]].helpfulness > sorted[j].helpfulness || answersObj[ids[i]].answerer_name === "Seller") {
          sorted.splice(j, 0, answersObj[ids[i]]);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        sorted.push(answersObj[ids[i]]);
      }
    }
  }

  return sorted;
};

const AnswerList = (props) => (
  <div className='answerList'>
    <div className='answerListBigA'>A:</div>
    <div className="aList">
      {
        sortAnswers(props.answers).map(answer => <Answer answer={answer}/>)
      }
      <div className='moreAnswersButton'>LOAD MORE ANSWERS</div>
    </div>
  </div>
);

export default AnswerList;



