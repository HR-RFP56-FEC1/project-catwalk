import React from 'react'


const Qlist = () => (
  <div id='qlist'>
    <div id='questionList'>
      <div id='question1'>
        <div id='topbar'>
          <div id='questiontext'>WHAT IS A QUESTION</div>
          <div id='questionHelpful'>HELPFUL VOTE AND DISPLAY</div>
          <div id='addAnswer'>ADD ANSWER BUTTON</div>
        </div>
        <div id='answerList'>
          <div id='answer1'>
            <div id='answer1body'>A QUESTION IS A QUESTION</div>
            <div id='answer1bottombor'>
              <div id='answer1byline'>by USERNAME, MONTH, 22, 2021</div>
              <div id='answer1helpful'>HELPFUL? Yes(22)</div>
              <div id='asnwer1report'>REPORT</div>
            </div>
          </div>
          <div id='answer2'>
            <div id='answer2body'>WHAT IS A QUESTION</div>
            <div id='answer2bottombor'>
              <div id='answer2byline'>by USERNAME2, MONTH, 23, 2021</div>
              <div id='answer2helpful'>HELPFUL? Yes(23)</div>
              <div id='asnwer2report'>REPORT</div>
            </div>
          </div>
          <div id='question1moreanswerbutton'>LOAD MORE ANSWERS</div>
        </div>
      </div>
    </div>



    <div id='bottombuttons'>
      <div id='moreQuestions'>MORE ANSWERED QUESTIONS</div>
      <div id='addQuestion'>ADD A QUESTION</div>
    </div>

  </div>
);

export default Qsearch
