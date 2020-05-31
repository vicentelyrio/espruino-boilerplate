import { delay } from './App.config';

const Main = (): void => {
  console.log('debug');
};

setInterval(() => {
  Main();
}, delay);
