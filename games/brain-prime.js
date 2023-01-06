#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

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

const checkPrime = (number) => {
  const result = isPrime(number) ? 'yes' : 'no';
  return result;
};

const getRandomNumber = (start = 1, end = 20) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const brainPrime = () => {
  const question = getRandomNumber(1, 20);
  const userAnswer = getAnswer(question);
  const correctAnswer = checkPrime(question);

  return [userAnswer, correctAnswer];
};

export default brainPrime;
