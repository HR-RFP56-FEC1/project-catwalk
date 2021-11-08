import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';
import questions from '../../../sample/questions.js';

// answers come in as object
// properties of obj are answer objects
// keys are answer ids
// sort by helpfulness
// if username === seller, put at top

const AnswerList = ({answers}) => {
  const [displayCount, setDisplayCount] = useState(2);
  const [displayList, setDisplayList] = useState(null);
  const [sortedList, setSortedList] = useState(null);

  const sortAnswers = function() {
    var sorted = [];
  
    var ids = Object.keys(answers);
  
    if (ids.length > 0) {
      sorted.push(answers[ids[0]]);
      for (var i = 1; i < ids.length; i++) {
        var inserted = false;
        for (var j = 0; j < sorted.length; j++) {
          if (answers[ids[i]].helpfulness > sorted[j].helpfulness || answers[ids[i]].answerer_name === "Seller") {
            sorted.splice(j, 0, answers[ids[i]]);
            inserted = true;
            break;
          }
        }
        if (!inserted) {
          sorted.push(answers[ids[i]]);
        }
      }
    }
    setSortedList(sorted);
  };

  const updateDisplay = function() {
    if (sortedList && sortedList.length > 0) {
      const temp = [];
      for (let i = 0; (i < displayCount && i < sortedList.length); i++) {
        temp.push(<Answer key={"answer" + sortedList[i].id} answer={sortedList[i]}/>)
      }
      setDisplayList(temp);
    }
  };

  const moreAnswersEvent = function(e) {
    e.preventDefault();
    setDisplayCount(displayCount + 2);
  }

  const collapseAnswersEvent = function(e) {
    e.preventDefault();
    setDisplayCount(2);
  }

  useEffect(() => {updateDisplay()}, [displayCount, sortedList]);
  useEffect(() => {sortAnswers()}, [answers]);

  return (
    <div className='answerList'>
      <div className='answerListBigA'>A:</div>
      <div className="aList">
        {
          displayList ? displayList: false
        }
        {
          (Object.keys(answers).length > 2) ? ((displayCount < Object.keys(answers).length) ? <input className='moreAnswersButton' type="button" value="See more answers" onClick={moreAnswersEvent}/>:
            <input className='collapseAnswersButton' type="button" value="Collapse Answers" onClick={collapseAnswersEvent}/>):
            <div/>
        }
      </div>
    </div>
  )
}


export default AnswerList;



