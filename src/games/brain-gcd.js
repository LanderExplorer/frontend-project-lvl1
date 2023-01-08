import readlineSync from 'readline-sync';
import mainLogic from '../index.js';

const getGcd = (num1, num2) => {
  if (num2) {
    return getGcd(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const getRandomNumber = () => Math.floor(Math.random() * 50);

const brainGcd = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const userAnswer = Number(getAnswer(question));
  const correctAnswer = getGcd(number1, number2);

  return [userAnswer, correctAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';
export default () => mainLogic(brainGcd, description);
