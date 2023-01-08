import readlineSync from 'readline-sync';
import mainLogic from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 20);
const getRandomOperator = () => {
  const index = Math.floor(Math.random() * 3);
  const operators = ['+', '-', '*'];
  return operators[index];
};

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const brainCalc = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const randomOperator = getRandomOperator();
  const question = `${number1} ${randomOperator} ${number2}`;
  const userAnswer = Number(getAnswer(question));
  let correctAnswer = 0;

  switch (randomOperator) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      correctAnswer = 0;
  }
  return [userAnswer, correctAnswer];
};

const description = 'What is the result of the expression?';
export default () => mainLogic(brainCalc, description);
