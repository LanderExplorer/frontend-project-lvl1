#!/usr/bin/env node
import mainLogic from '../src/index.js';
import brainPrime from '../games/brain-prime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
mainLogic(brainPrime, description);
