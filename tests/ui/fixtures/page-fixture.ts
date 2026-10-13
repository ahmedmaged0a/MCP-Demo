import { test as base } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard-page';
import { LoginPage } from '../pages/login-page';
import { PimPage } from '../pages/pim-page';

type PageFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  pimPage: PimPage;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  pimPage: async ({ page }, use) => {
    await use(new PimPage(page));
  },
});
