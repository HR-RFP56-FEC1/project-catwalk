import React from 'react';
import Question from './Question.jsx';


// sort questions by helpfulness
const questionSorter = function(questionArray) {
  var sorted = [];

  if (questionArray && questionArray.length > 0) {
    sorted.push(questionArray[0]);

    for (var i = 1; i < questionArray.length; i++) {
      var inserted = false;
      for (var j = 0; j < sorted.length; j++) {
        if (questionArray[i].helpfulness > sorted[j].helpfulness) {
          sorted.splice(j, 0, questionArray[i]);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        sorted.push(questionArray[i]);
      }
    }
  }

  return sorted;
};


const QuestionList = (props) => (
  <div className='questionList'>
    <div className='qList'>
      {
        questionSorter(props.questions.results).map(question => <Question question={question}/>)
      }
    </div>
    <div className='qListBottomBar'>
      <div className='moreQuestions'>MORE ANSWERED QUESTIONS</div>
      <div className='addQuestion'>ADD A QUESTION</div>
    </div>
  </div>
);

export default QuestionList;
