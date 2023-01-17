import getRandomNumber from '../helper.js';
import runMainLogic from '../index.js';

const isEven = (number) => (number % 2 === 0);

const getBrainEvenData = () => {
  const evenQuestion = getRandomNumber(1, 50);
  const correctAnswer = isEven(evenQuestion) ? 'yes' : 'no';

  return [evenQuestion, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => runMainLogic(getBrainEvenData, description);
