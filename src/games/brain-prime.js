import getRandomNumber from '../helper.js';
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

const getBrainPrimeData = () => {
  const primeQuestion = getRandomNumber(1, 20);
  const correctAnswer = isPrime(primeQuestion) ? 'yes' : 'no';

  return [primeQuestion, correctAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => runMainLogic(getBrainPrimeData, description);
