import React, { useState, useEffect }  from 'react';
import Question from './Question.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';
import interactions from '../shared/interactions.js';


const QuestionList = ({questions, product_id, productInfo}) => {
  const [search, setSearch] = useState('');
  const [sortedList, setDisplayList] = useState(questions.results);
  const [displayCount, setDisplayCount] = useState(4);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productName, setProductName] = useState('');

  const openModal = function() {
    setModalIsOpen(true);
  };

  const handleSearch = function(text) {
    setSearch(text);
  };
  const handleDisplayCount = function(e) {
    e.preventDefault();
    interactions("moreQuestions", "questions");
    setDisplayCount(displayCount + 2);
  };
  const handleAddQuestion = function(e) {
    e.preventDefault();
    interactions("addQuestion", "questions");
    openModal();
  };

  // sort questions by helpfulness
  // also filter by search criteria if length of search >= 3
  const questionSorter = function() {
    var sorted = [];
    if (questions.results && questions.results.length > 0) {
      for (var i = 0; i < questions.results.length; i++) {
        if (search.length < 3 || (questions.results[i].question_body.toLowerCase().indexOf(search.toLowerCase()) >= 0)) {
          if (sorted.length > 0) {
            var inserted = false;
            for (var j = 0; j < sorted.length; j++) {
              if (questions.results[i].helpfulness > sorted[j].helpfulness) {
                sorted.splice(j, 0, questions.results[i]);
                inserted = true;
                break;
              }
            }
            if (!inserted) {
              sorted.push(questions.results[i]);
            }
          } else {
              sorted.push(questions.results[i]);
          }
        }
      }
    }
    setDisplayList(sorted);
  };

  // function to render 4 or all questions
  const displayListFunc = function() {
    if (sortedList) {
      const temp = [];
      for (let i = 0; (i < sortedList.length && i < displayCount); i++) {
        temp.push(sortedList[i]);
      }
      return (temp.map(question => <Question key={"question" + question.question_id} question={question} product_id={product_id} productName={productName}/>));
    }
  };

  useEffect(() => {
    questionSorter();
  }, [questions, search])

  useEffect(() => {
    if(productInfo) {
      setProductName(productInfo.name);
    }
  }, [productInfo])

  return (
    <div className='questionList'>
      <AddQuestionModal isOpen={modalIsOpen} product_id={product_id} setModalState={setModalIsOpen} productName={productName}/>
      <div id='qsearch'>
        <input id='qsearchtextinput' type="text" value={search} onChange={event => handleSearch(event.target.value)} placeholder="Have a question? Search for answers…"/>
      </div>
      <div className='qList'>
        {displayListFunc()}
      </div>
      <div className='qListBottomBar'>
        {
          (sortedList && sortedList.length > displayCount) && <input className='moreQuestionsButton' type="button" value="MORE ANSWERED QUESTIONS" onClick={handleDisplayCount}/>
        }
        <input className='addQuestionButton' type="button" value="ADD A QUESTION  +" onClick={handleAddQuestion}/>
      </div>
    </div>
  );
};

export default QuestionList;
