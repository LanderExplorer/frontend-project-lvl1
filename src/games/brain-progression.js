import getRandomNumber from '../helper.js';
import runMainLogic from '../index.js';

const getProgression = (startOfProgression, progressionStep, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startOfProgression + i * progressionStep);
  }
  return progression;
};

const minNum = 1;
const maxNum = 20;
const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 10;

const getBrainProgressionData = () => {
  const startOfProgression = getRandomNumber(minNum, maxNum);
  const progressionStep = getRandomNumber(minStep, maxStep);
  const progressionLength = getRandomNumber(minLength, maxLength);
  const lostIndex = getRandomNumber(0, progressionLength - 1);
  const progression = getProgression(startOfProgression, progressionStep, progressionLength);
  const correctAnswer = String(progression[lostIndex]);
  progression[lostIndex] = '..';
  const progressionQuestion = progression.join(' ');
  return [progressionQuestion, correctAnswer];
};

const description = 'What number is missing in the progression?';
export default () => runMainLogic(getBrainProgressionData, description);
