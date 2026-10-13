import { chromium } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { appData } from '../test-data/orangehrm-data';

export async function writeAllureEnvironment(): Promise<void> {
  const browser = await chromium.launch();
  const browserDescription = `${browser.browserType().name()} ${browser.version()}`;
  await browser.close();

  const resultsDir = path.resolve('allure-results');
  fs.mkdirSync(resultsDir, { recursive: true });

  const properties = [
    ['Browser', browserDescription],
    ['Tester', appData.testerName],
    ['Environment', appData.environmentName],
    ['Base URL', appData.baseUrl],
  ]
    .map(([key, value]) => `${key.replaceAll(' ', '\\ ')}=${value}`)
    .join('\n');

  fs.writeFileSync(path.join(resultsDir, 'environment.properties'), `${properties}\n`);
}
