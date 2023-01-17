import getRandomNumber from '../helper.js';
import runMainLogic from '../index.js';

const getGcd = (num1, num2) => {
  if (num2) {
    return getGcd(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const getBrainGcdData = () => {
  const numberForGcd1 = getRandomNumber(1, 30);
  const numberForGcd2 = getRandomNumber(1, 30);
  const gcdQuestion = `${numberForGcd1} ${numberForGcd2}`;
  const correctAnswer = String(getGcd(numberForGcd1, numberForGcd2));

  return [gcdQuestion, correctAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';
export default () => runMainLogic(getBrainGcdData, description);
