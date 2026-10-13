import { expect, type Locator, type Page } from '@playwright/test';

export class PimPage {
  // Locators
  private readonly employeeName_tb: Locator;
  private readonly employeeNameOption_dd: Locator;
  private readonly search_btn: Locator;
  private readonly employeeRecords_tbl: Locator;
  private readonly firstName_lbl: Locator;
  private readonly lastName_lbl: Locator;

  constructor(private readonly page: Page) {
    this.employeeName_tb = page.locator('.oxd-table-filter form.oxd-form .oxd-grid-item:nth-child(1) input');
    this.employeeNameOption_dd = page.locator('.oxd-autocomplete-dropdown .oxd-autocomplete-option:has(span)');
    this.search_btn = page.locator('.oxd-table-filter form.oxd-form button[type="submit"]');
    this.employeeRecords_tbl = page.locator('.oxd-table.orangehrm-employee-list .oxd-table-card');
    this.firstName_lbl = page.locator('.oxd-table.orangehrm-employee-list .oxd-table-card .oxd-table-cell:nth-child(3)').first();
    this.lastName_lbl = page.locator('.oxd-table.orangehrm-employee-list .oxd-table-card .oxd-table-cell:nth-child(4)').first();
  }

  // Actions
  async typeEmployeeNameTB(employeeNameHint: string): Promise<void> {
    await this.employeeName_tb.pressSequentially(employeeNameHint);
  }

  async clickEmployeeNameOptionDD(): Promise<void> {
    await this.employeeNameOption_dd.first().click();
  }

  async clickSearchBtn(): Promise<void> {
    await this.search_btn.click();
  }

  // Assertions
  async assertFirstNameText(firstName: string): Promise<void> {
    await expect(this.firstName_lbl).toHaveText(firstName);
  }

  async assertLastNameText(lastName: string): Promise<void> {
    await expect(this.lastName_lbl).toHaveText(lastName);
  }

  async assertEmployeeRecordsSize(minimumRecordCount: number): Promise<void> {
    const recordCount = await this.employeeRecords_tbl.count();
    expect(recordCount).toBeGreaterThanOrEqual(minimumRecordCount);
  }
}
