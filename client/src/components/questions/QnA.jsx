import React from 'react';
import Qsearch from './Qsearch.jsx';
import QuestionList from './QuestionList.jsx';

import questions from '../../../sample/questions.js';


const QnA = (props) => (
  <div id="qna">
    <div id='qtitlebar'>QUESTIONS AND ANSWERS</div>
    <div id='qSearch'><Qsearch/></div>
    <div id='qList'><QuestionList questions={questions}/></div>
  </div>
);

export default QnA;
