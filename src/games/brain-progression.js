import { getAnswer, getRandomNumber } from '../supplementary.js';
import runMainLogic from '../index.js';

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

const description = 'What number is missing in the progression?';
export default () => runMainLogic(brainProgression, description);
