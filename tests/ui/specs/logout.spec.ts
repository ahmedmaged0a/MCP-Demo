import { appData, loginData } from '../../../test-data/orangehrm-data';
import { test } from '../fixtures/page-fixture';

test('Check that the login page is shown when logging out from the user menu @ui @regression', async ({
  loginPage,
  dashboardPage,
}) => {
  // Arrange
  await loginPage.open(appData.baseUrl);
  await loginPage.typeUsernameTB(loginData.username);
  await loginPage.typePasswordTB(loginData.password);
  await loginPage.clickLoginBtn();

  // Act
  await dashboardPage.clickUserMenuDD();
  await dashboardPage.clickLogoutLink();

  // Assert
  await loginPage.assertLoginTitleText(loginData.loginTitle);
});
