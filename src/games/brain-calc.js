import getRandomNumber from '../helper.js';
import runMainLogic from '../index.js';

const operators = ['+', '-', '*'];

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
  const randomOperand1 = getRandomNumber(1, 20);
  const randomOperand2 = getRandomNumber(1, 20);
  const randomOperator = operators[getRandomNumber(0, 2)];
  const calcQuestion = `${randomOperand1} ${randomOperator} ${randomOperand2}`;
  const correctAnswer = String(calculate(randomOperand1, randomOperand2, randomOperator));
  return [calcQuestion, correctAnswer];
};

const description = 'What is the result of the expression?';
export default () => runMainLogic(getBrainCalcData, description);
