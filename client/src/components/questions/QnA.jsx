import React, { useState, useEffect, useContext } from 'react';
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

const getProduct = function(id) {
  var urlString = '/api/products/' + id ;
  return axios({
    method: 'get',
    url: urlString,
    responseType: 'json'
  });
};

const QnA = ({id}) => {
  const [results, setResults] = useState([]);
  // const [product_id, setId] = useState(40353);
  // 40344 for many questions testing
  // const [product_id, setId] = useState(40344);
  // hard coded for now to get product with questions
  const [product_id, setId] = useState(id);

  const [productName, setProductName] = useState('');

  const handleResults = function(response) {
    setResults(response.data);
  }

  const handleProduct = function(response) {
    setProductName(response.data.name);
  }

  useEffect(() => {
    getQuestions(product_id).then((response) => {
      handleResults(response);
      getProduct(product_id).then((response) => {
        handleProduct(response);
      });
    });
  }, []);
  return (
  <div id="qna" className='qna'>
    <div id='qtitlebar'>QUESTIONS AND ANSWERS</div>

    <div id='qList'>{
      results ? <QuestionList questions={results} product_id={product_id} productName={productName}/> : <div>Loading....</div>
      }
    </div>
  </div>
)};


export default QnA;
