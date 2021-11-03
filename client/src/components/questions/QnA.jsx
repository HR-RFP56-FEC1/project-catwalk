import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList.jsx';
import axios from 'axios';
import questions from '../../../sample/questions.js';

const getQuestions = function(id) {
  var urlString = '/api/qa/questions' + '?product_id=' + id + '&count=100';
  return axios({
    method: 'get',
    url: urlString,
    responseType: 'json'
  });
};

const QnA = (props) => {
  const [results, setResults] = useState([]);
  // const [product_id, setId] = useState(40353);
  // 40344 for many questions testing
  const [product_id, setId] = useState(40344);

  // hard coded for now to get product with questions
  // const [product_id, setId] = useState(props.id);
  const handleResults = function(response) {
    setResults(response.data);
  }
  useEffect(() => {
    getQuestions(product_id).then((response) => {
      handleResults(response);
    });
  }, []);
  return (
  <div id="qna" className='qna'>
    <div id='qtitlebar'>QUESTIONS AND ANSWERS</div>

    <div id='qList'>{
      results ? <QuestionList questions={results}/> : <div>Loading....</div>
      }
    </div>
  </div>
)};


export default QnA;
