import { getAnswer, getRandomNumber } from '../helper.js';
import runMainLogic from '../index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const checkIsPrime = (number) => {
  const result = isPrime(number) ? 'yes' : 'no';
  return result;
};

const brainPrime = () => {
  const primeQuestion = getRandomNumber(1, 20);
  const userAnswer = getAnswer(primeQuestion);
  const correctAnswer = checkIsPrime(primeQuestion);

  return [userAnswer, correctAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => runMainLogic(brainPrime, description);
