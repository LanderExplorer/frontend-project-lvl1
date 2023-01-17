import getRandomNumber from '../helper.js';
import runMainLogic from '../index.js';

const getProgression = (startOfProgression, progressionStep, progressionLength) => {
  const progression = [];
  let result = startOfProgression;
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(result);
    result += progressionStep;
  }
  return progression;
};

const getBrainProgressionData = () => {
  const startOfProgression = getRandomNumber(1, 20);
  const progressionStep = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);
  const lostIndex = getRandomNumber(0, progressionLength - 1);
  const progression = getProgression(startOfProgression, progressionStep, progressionLength);
  const correctAnswer = String(progression[lostIndex]);
  progression[lostIndex] = '..';
  const progressionQuestion = progression.join(' ');
  return [progressionQuestion, correctAnswer];
};

const description = 'What number is missing in the progression?';
export default () => runMainLogic(getBrainProgressionData, description);
