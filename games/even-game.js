#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const getRandomNumber = () => Math.floor(Math.random() * 100);
const isEven = (number) => (number % 2 === 0);
const checkEven = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const brainEven = () => {
  const question = getRandomNumber();
  const userAnswer = getAnswer(question);
  const correctAnswer = checkEven(question);

  return [userAnswer, correctAnswer];
};

export default brainEven;
