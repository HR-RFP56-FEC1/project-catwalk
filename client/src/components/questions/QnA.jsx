import React, { useState, useEffect } from 'react';
import Qsearch from './Qsearch.jsx';
import QuestionList from './QuestionList.jsx';
import axios from 'axios';
import questions from '../../../sample/questions.js';

const getQuestions = function(id) {
<<<<<<< HEAD
  var urlString = '/api/qa/questions' + '?product_id=' + id + '&count=100';
  console.log('urlstring:');
  console.log(urlString);
  axios({
    method: 'get',
    url: urlString
  }).then((data) => {
    console.log('api server results:');
    console.log(data.results);
=======
  axios.get({
    url: '/api/qa/questions' + '?product_id=' + id + '&count=100',
  }).then((data) => {
>>>>>>> qna
    return <QuestionList questions={data.results}/>
  });
};


<<<<<<< HEAD
const QnA = (props) => {
  const [results, setResults] = useState(0);
  useEffect(() => {
    setResults(getQuestions(props.id));
  });

  return (
  <div id="qna" className='qna'>
    <div id='qtitlebar'>QUESTIONS AND ANSWERS</div>
    <div ><Qsearch/></div>
    <div id='qList'><QuestionList questions={questions}/></div>
=======
const QnA = (props) => (
  <div id="qna" className='qna'>
    <div id='qtitlebar'>QUESTIONS AND ANSWERS</div>
    <div ><Qsearch/></div>
    <div id='qList'>{getQuestions(props.id)}</div>
>>>>>>> qna
  </div>
)};

// const QnA = (props) => (
//   <div id="qna" className='qna'>
//     <div id='qtitlebar'>QUESTIONS AND ANSWERS</div>
//     <div ><Qsearch/></div>
//     <div id='qList'><QuestionList questions={questions}/></div>
//   </div>
// );

<<<<<<< HEAD
=======
// const QnA = (props) => (
//   <div id="qna" className='qna'>
//     <div id='qtitlebar'>QUESTIONS AND ANSWERS</div>
//     <div ><Qsearch/></div>
//     <div id='qList'><QuestionList questions={questions}/></div>
//   </div>
// );

>>>>>>> qna
export default QnA;
