import questions from '../../../../sample/questions.js';


import sortAnswers from './sortAnswers.js';

test('sorts answers', () => {
  expect(sortAnswers(questions.results[1].answers)[3].helpfulness).toBe(2);
});

console.log(sortAnswers(questions.results[1].answers));