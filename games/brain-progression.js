#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const getRandomNumber = (start = 1, end = 20) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const brainProgression = () => {
  const begin = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const lostIndex = getRandomNumber(0, length - 1);
  const progression = [begin];
  let item = begin;

  for (let i = 0; i < length; i += 1) {
    item += step;
    progression.push(item);
  }

  const question = [];
  let correctAnswer = 0;

  for (let i = 0; i <= length; i += 1) {
    if (i === lostIndex) {
      question.push('..');
      correctAnswer = progression[i];
    } else {
      question.push(progression[i]);
    }
  }

  const userAnswer = Number(getAnswer(question.join(' ')));

  return [userAnswer, correctAnswer];
};
export default brainProgression;
