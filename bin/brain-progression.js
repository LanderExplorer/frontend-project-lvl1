#!/usr/bin/env node
import brainProgression from '../games/brain-progression.js';
import mainLogic from '../src/index.js';

const description = 'What number is missing in the progression?';
mainLogic(brainProgression, description);
