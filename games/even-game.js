#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const getRandomNumber = () => Math.floor(Math.random() * 100);
export const isEven = (number) => (number % 2 === 0);
export const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const brainEven = () => {
  const question = getRandomNumber();
  const userAnswer = getAnswer(question);
  const correctAnswer = check(question);

  return [userAnswer, correctAnswer];
};

export default brainEven;
