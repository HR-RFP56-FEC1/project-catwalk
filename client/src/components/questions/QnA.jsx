import React from 'react';
import Qsearch from './Qsearch.jsx';
import QuestionList from './QuestionList.jsx';


const QnA = () => (
  <div id="qna">
    <div id='qtitlebar'>QUESTIONS AND ANSWERS</div>
    <div id='qSearch'><Qsearch/></div>
    <div id='qList'><QuestionList/></div>
  </div>
);

export default QnA
