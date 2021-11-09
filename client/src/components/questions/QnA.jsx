import React, { useState, useEffect, useContext } from 'react';
import QuestionList from './QuestionList.jsx';
import axios from 'axios';
// import questions from '../../../sample/questions.js';

const getQuestions = function(id) {
  var urlString = '/api/qa/questions' + '?product_id=' + id + '&count=100';
  return axios({
    method: 'get',
    url: urlString,
    responseType: 'json'
  });
};

const QnA = ({id, productInfo, interactions}) => {
  const [results, setResults] = useState([]);

  const handleResults = function(response) {
    setResults(response.data);
  }

  useEffect(() => {
    getQuestions(id).then((response) => {
      handleResults(response);
    });
  }, [id]);

  return (
  <div id="qna" className='qna'>
    <div id='qtitlebar'>QUESTIONS AND ANSWERS</div>
    <div id='qList'>{
      results ? <QuestionList questions={results} product_id={id} productInfo={productInfo}/> : <div>Loading....</div>
      }
    </div>
  </div>
)};


export default QnA;
