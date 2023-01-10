import { getAnswer, getRandomNumber } from '../supplementary.js';
import runMainLogic from '../index.js';

const getRandomOperator = () => {
  const index = Math.floor(Math.random() * 3);
  const operators = ['+', '-', '*'];
  return operators[index];
};

const brainCalc = () => {
  const number1 = getRandomNumber(1, 30);
  const number2 = getRandomNumber(1, 30);
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
export default () => runMainLogic(brainCalc, description);
