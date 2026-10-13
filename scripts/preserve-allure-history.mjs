import fs from 'node:fs';
import path from 'node:path';

const historySource = path.resolve('allure-report/history');
const resultsDir = path.resolve('allure-results');
const historyTarget = path.join(resultsDir, 'history');

fs.mkdirSync(resultsDir, { recursive: true });

if (fs.existsSync(historySource)) {
  fs.cpSync(historySource, historyTarget, { recursive: true });
}
