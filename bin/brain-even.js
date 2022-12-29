#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100);
// const randomNumber = Math.floor(Math.random() * 100);
// console.log(randomNumber);
const isEven = (number) => (number % 2 === 0);
const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
//   console.log(result);
};
// check(randomNumber);

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    const correctAnswer = check(number);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong ;(. Correct answer was "${correctAnswer}"`);
      return console.log(`Let's try again, ${userName}`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};

brainEven();
