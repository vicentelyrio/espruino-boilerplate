import AppConfig from './App.config';

setInterval(() => {
  // digitalWrite(22 as Pin, 1);
  console.log('blabla')
}, AppConfig.refreshPeriodSec * 1000);
