import getRandomNumber from '../helper.js';
import runMainLogic from '../index.js';

const operators = ['+', '-', '*'];
const minNum = 1;
const maxNum = 20;

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`operation ${operator} is not supported`);
  }
};

const getBrainCalcData = () => {
  const randomOperand1 = getRandomNumber(minNum, maxNum);
  const randomOperand2 = getRandomNumber(minNum, maxNum);
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const calcQuestion = `${randomOperand1} ${randomOperator} ${randomOperand2}`;
  const correctAnswer = String(calculate(randomOperand1, randomOperand2, randomOperator));
  return [calcQuestion, correctAnswer];
};

const description = 'What is the result of the expression?';
export default () => runMainLogic(getBrainCalcData, description);
