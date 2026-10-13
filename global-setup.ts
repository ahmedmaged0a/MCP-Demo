import { writeAllureEnvironment } from './scripts/write-allure-environment';

export default async function globalSetup(): Promise<void> {
  await writeAllureEnvironment();
}
