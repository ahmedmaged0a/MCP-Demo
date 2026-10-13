import { appData, loginData, pimData } from '../../../test-data/orangehrm-data';
import { test } from '../fixtures/page-fixture';

test('Check that at least one matching record appears when searching the Employee List by an existing employee name @ui @regression', async ({
  loginPage,
  dashboardPage,
  pimPage,
}) => {
  // Arrange
  await loginPage.open(appData.baseUrl);
  await loginPage.typeUsernameTB(loginData.username);
  await loginPage.typePasswordTB(loginData.password);
  await loginPage.clickLoginBtn();
  await dashboardPage.clickPimLink();

  // Act
  await pimPage.typeEmployeeNameTB(pimData.employeeNameHint);
  await pimPage.clickEmployeeNameOptionDD();
  await pimPage.clickSearchBtn();

  // Assert
  await pimPage.assertFirstNameText(pimData.firstName);
  await pimPage.assertLastNameText(pimData.lastName);
  await pimPage.assertEmployeeRecordsSize(pimData.minimumRecordCount);
});
