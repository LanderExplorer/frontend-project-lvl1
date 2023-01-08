import mainLogic from '../index.js';
import { getAnswer, getRandomNumber } from '../supplementary.js';

const isEven = (number) => (number % 2 === 0);
const checkIsEven = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const brainEven = () => {
  const question = getRandomNumber(1, 50);
  const userAnswer = getAnswer(question);
  const correctAnswer = checkIsEven(question);

  return [userAnswer, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => mainLogic(brainEven, description);
