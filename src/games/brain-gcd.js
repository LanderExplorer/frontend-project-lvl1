import { getAnswer, getRandomNumber } from '../helper.js';
import runMainLogic from '../index.js';

const getGcd = (num1, num2) => {
  if (num2) {
    return getGcd(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const brainGcd = () => {
  const number1 = getRandomNumber(1, 30);
  const number2 = getRandomNumber(1, 30);
  const question = `${number1} ${number2}`;
  const userAnswer = Number(getAnswer(question));
  const correctAnswer = getGcd(number1, number2);

  return [userAnswer, correctAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';
export default () => runMainLogic(brainGcd, description);
