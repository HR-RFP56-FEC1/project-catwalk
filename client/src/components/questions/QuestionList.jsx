import React, { useState, useEffect }  from 'react';
import Question from './Question.jsx';


const QuestionList = (props) => {
  const [search, setSearch] = useState('');
  const [displayList, setDisplay] = useState(props.questions.results);
  const handleSearch = function(text) {
    setSearch(text);
  }

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
    setDisplay(sorted);
  }

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
        {displayList ? displayList.map(question => <Question question={question}/>) : <div>Loading....</div>}
      </div>
      <div className='qListBottomBar'>
        <div className='moreQuestions'>MORE ANSWERED QUESTIONS</div>
        <div className='addQuestion'>ADD A QUESTION</div>
      </div>
    </div>
  );
};

export default QuestionList;
