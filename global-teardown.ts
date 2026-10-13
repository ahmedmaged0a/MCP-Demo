import { writeAllureEnvironment } from './scripts/write-allure-environment';

export default async function globalTeardown(): Promise<void> {
  await writeAllureEnvironment();
}
