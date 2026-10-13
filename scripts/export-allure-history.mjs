import fs from 'node:fs';
import path from 'node:path';

const reportFile = path.resolve('allure-report/index.html');
const historyDir = path.resolve('allure-report/history');
const html = fs.readFileSync(reportFile, 'utf8');
const historyFiles = [...html.matchAll(/d\('(history\/[^']+\.json)','([^']*)'\)/g)];

fs.mkdirSync(historyDir, { recursive: true });

for (const historyFile of historyFiles) {
  const fileName = path.basename(historyFile[1]);
  const contents = Buffer.from(historyFile[2], 'base64');
  fs.writeFileSync(path.join(historyDir, fileName), contents);
}
