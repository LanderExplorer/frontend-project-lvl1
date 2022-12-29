#!/usr/bin/env node

import mainLogic from '../src/index.js';
import brainCalc from '../games/calc-game.js';

const description = 'What is the result of the expression?';
mainLogic(brainCalc, description);
