#!/usr/bin/env node
import mainLogic from '../src/index.js';
import brainEven from '../games/even-game.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
mainLogic(brainEven, description);
