#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const getRandomNumber = () => Math.floor(Math.random() * 50);


