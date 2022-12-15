#!/usr/bin/env node
import greeting from '../src/cli.js';
greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);