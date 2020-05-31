import AppConfig from './App.config';

setInterval(() => {
  // digitalWrite(22 as Pin, 1);
  console.log('test');
}, AppConfig.refreshPeriodSec * 1000);
