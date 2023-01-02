#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getGcd = (num1, num2) => {
  if (num2) {
    return getGcd(num2, num1 % num2);
  }
  return Math.abs(num1);
};

export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const getRandomNumber = () => Math.floor(Math.random() * 50);

const brainGcd = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const userAnswer = Number(getAnswer(question));
  const correctAnswer = getGcd(number1, number2);

  return [userAnswer, correctAnswer];
};

export default brainGcd;
