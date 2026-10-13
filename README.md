# OrangeHRM Playwright framework

Page Object Model tests for the OrangeHRM open-source demo, with a single-file Allure report and GitHub Actions.

## Setup

```bash
npm install
npx playwright install chromium
```

Generating the report needs Java 17 or newer (`java -version`). GitHub Actions installs Temurin 21.

## Run

```bash
npx playwright test
```

Tests run headless in Chromium. Test data, including the URL and credentials, lives in `test-data/orangehrm-data.ts`.

## Report

```bash
npm run report
```

Open `allure-report/index.html` by double-click. The file is self-contained and does not need a server. Each generate keeps the previous `allure-report/history` folder, so the Trend graphs grow across runs. The Environment widget lists the browser, tester, environment, and base URL.

## CI

Pushes and pull requests to `main` run `.github/workflows/playwright.yml`. The workflow installs dependencies and Chromium, restores Allure history from the Actions cache, runs the tests headless, generates the single-file report, saves the new history, and uploads `allure-report/index.html` as the `allure-report` artifact even when tests fail.
