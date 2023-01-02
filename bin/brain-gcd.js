#!/usr/bin/env node
import mainLogic from '../src/index.js';
import brainGcd from '../games/brain-gcd.js'

const description = 'Find the greatest common divisor of given numbers.';
mainLogic(brainGcd, description);
