import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  // Locators
  private readonly loginTitle_lbl: Locator;
  private readonly username_tb: Locator;
  private readonly password_tb: Locator;
  private readonly login_btn: Locator;

  constructor(private readonly page: Page) {
    this.loginTitle_lbl = page.locator('h5.orangehrm-login-title');
    this.username_tb = page.locator('input[name="username"]');
    this.password_tb = page.locator('input[name="password"]');
    this.login_btn = page.locator('button.orangehrm-login-button');
  }

  // Actions
  async open(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async typeUsernameTB(username: string): Promise<void> {
    await this.username_tb.fill(username);
  }

  async typePasswordTB(password: string): Promise<void> {
    await this.password_tb.fill(password);
  }

  async clickLoginBtn(): Promise<void> {
    await this.login_btn.click();
  }

  // Assertions
  async assertLoginTitleText(loginTitle: string): Promise<void> {
    await expect(this.loginTitle_lbl).toHaveText(loginTitle);
  }
}
