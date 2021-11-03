import React, { useState, useEffect }  from 'react';
import Question from './Question.jsx';


const QuestionList = (props) => {
  const [search, setSearch] = useState('');
  const [sortedList, setDisplayList] = useState(props.questions.results);
  const [displayAll, setDisplayAll] = useState(false);
  const handleSearch = function(text) {
    setSearch(text);
  };
  const handleDisplayAll = function(e) {
    e.preventDefault();
    setDisplayAll(true);
  };

  // sort questions by helpfulness
  // also filter by search criteria if length of search >= 3
  const questionSorter = function() {
    var sorted = [];
    if (props.questions.results && props.questions.results.length > 0) {
      for (var i = 0; i < props.questions.results.length; i++) {
        if (search.length < 3 || (props.questions.results[i].question_body.toLowerCase().indexOf(search.toLowerCase()) >= 0)) {
          if (sorted.length > 0) {
            var inserted = false;
            for (var j = 0; j < sorted.length; j++) {
              if (props.questions.results[i].helpfulness > sorted[j].helpfulness) {
                sorted.splice(j, 0, props.questions.results[i]);
                inserted = true;
                break;
              }
            }
            if (!inserted) {
              sorted.push(props.questions.results[i]);
            }
          } else {
              sorted.push(props.questions.results[i]);
          }
        }
      }
    }
    setDisplayList(sorted);
  };

  // function to render 4 or all questions
  const displayListFunc = function() {
    if (sortedList) {
      if (displayAll) {
        return (sortedList.map(question => <Question key={"question" + question.question_id} question={question}/>));
      } else {
        
        const temp = [];
        for (let i = 0; (i < sortedList.length && i < 4); i++) {
          temp.push(sortedList[i]);
        }
        return (temp.map(question => <Question key={"question" + question.question_id} question={question}/>));
      }
      
    }
  };
  

  useEffect(() => {
    questionSorter();
  }, [props, search])

  return (
    <div className='questionList'>
      <div id='qsearch'>
        <input id='qsearchtextinput' type="text" value={search} onChange={event => handleSearch(event.target.value)} placeholder="Have a question? Search for answers…"/>
        <div id='qMag'>MAGNIFYING GLASS ICON</div>
      </div>
      <div className='qList'>
        {displayListFunc()}
      </div>
      <div className='qListBottomBar'>
        {
          (sortedList && sortedList.length > 4) && <input className='moreQuestionsButton' type="button" value="More Answered Questions" onClick={handleDisplayAll}/>
        }
        <div className='moreQuestions'>MORE ANSWERED QUESTIONS</div>
        <div className='addQuestion'>ADD A QUESTION</div>
      </div>
    </div>
  );
};

export default QuestionList;
