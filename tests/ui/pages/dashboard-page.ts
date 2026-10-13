import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {
  // Locators
  private readonly pim_link: Locator;
  private readonly dashboardTitle_lbl: Locator;
  private readonly userMenu_dd: Locator;
  private readonly logout_link: Locator;

  constructor(private readonly page: Page) {
    this.pim_link = page.locator('a.oxd-main-menu-item[href="/web/index.php/pim/viewPimModule"]');
    this.dashboardTitle_lbl = page.locator('h6.oxd-topbar-header-breadcrumb-module');
    this.userMenu_dd = page.locator('span.oxd-userdropdown-tab');
    this.logout_link = page.locator('a.oxd-userdropdown-link[href="/web/index.php/auth/logout"]');
  }

  // Actions
  async clickPimLink(): Promise<void> {
    await this.pim_link.click();
  }

  async clickUserMenuDD(): Promise<void> {
    await this.userMenu_dd.click();
  }

  async clickLogoutLink(): Promise<void> {
    await this.logout_link.click();
  }

  // Assertions
  async assertDashboardTitleText(dashboardTitle: string): Promise<void> {
    await expect(this.dashboardTitle_lbl).toHaveText(dashboardTitle);
  }
}
