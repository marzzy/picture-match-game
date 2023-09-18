import { v4 as uuidv4 } from 'uuid';

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomUniqueNum() {
  return uuidv4();
}