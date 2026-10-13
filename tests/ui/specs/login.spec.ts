import { appData, dashboardData, loginData } from '../../../test-data/orangehrm-data';
import { test } from '../fixtures/page-fixture';

test('Check that the Dashboard opens when logging in with valid credentials @ui @regression @sanity', async ({
  loginPage,
  dashboardPage,
}) => {
  // Arrange
  await loginPage.open(appData.baseUrl);

  // Act
  await loginPage.typeUsernameTB(loginData.username);
  await loginPage.typePasswordTB(loginData.password);
  await loginPage.clickLoginBtn();

  // Assert
  await dashboardPage.assertDashboardTitleText(dashboardData.dashboardTitle);
});
