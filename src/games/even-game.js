import { getAnswer, getRandomNumber } from '../supplementary.js';
import runMainLogic from '../index.js';

const isEven = (number) => (number % 2 === 0);
const checkIsEven = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const brainEven = () => {
  const evenQuestion = getRandomNumber(1, 50);
  const userAnswer = getAnswer(evenQuestion);
  const correctAnswer = checkIsEven(evenQuestion);

  return [userAnswer, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => runMainLogic(brainEven, description);
