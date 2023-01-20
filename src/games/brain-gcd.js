import getRandomNumber from '../helper.js';
import runMainLogic from '../index.js';

const getGcd = (num1, num2) => {
  if (num2) {
    return getGcd(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const minNum = 1;
const maxNum = 30;

const getBrainGcdData = () => {
  const numberForGcd1 = getRandomNumber(minNum, maxNum);
  const numberForGcd2 = getRandomNumber(minNum, maxNum);
  const gcdQuestion = `${numberForGcd1} ${numberForGcd2}`;
  const correctAnswer = String(getGcd(numberForGcd1, numberForGcd2));

  return [gcdQuestion, correctAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';
export default () => runMainLogic(getBrainGcdData, description);
