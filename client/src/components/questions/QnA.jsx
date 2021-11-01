import React from 'react';
import Qsearch from './Qsearch.jsx';
import QuestionList from './QuestionList.jsx';
import axios from 'axios';
import questions from '../../../sample/questions.js';

const getQuestions = function(id) {
  axios.get({
    url: '/api/qa/questions' + '?product_id=' + id + '&count=100',
  }).then((data) => {
    return <QuestionList questions={data.results}/>
  });
};


const QnA = (props) => (
  <div id="qna" className='qna'>
    <div id='qtitlebar'>QUESTIONS AND ANSWERS</div>
    <div ><Qsearch/></div>
    <div id='qList'>{getQuestions(props.id)}</div>
  </div>
);

// const QnA = (props) => (
//   <div id="qna" className='qna'>
//     <div id='qtitlebar'>QUESTIONS AND ANSWERS</div>
//     <div ><Qsearch/></div>
//     <div id='qList'><QuestionList questions={questions}/></div>
//   </div>
// );

export default QnA;
