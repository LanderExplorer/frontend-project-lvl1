// import readlineSync from 'readline-sync';

// export const getAnswer = (question) => {
//   console.log(`Question: ${question}`);
//   const answer = readlineSync.question('Your answer: ');
//   return answer;
// };

const getRandomNumber = (start = 1, end = 20) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default getRandomNumber;
