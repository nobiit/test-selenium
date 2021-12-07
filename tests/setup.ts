import type { WebDriver, Capabilities } from 'selenium-webdriver';
import { Builder } from 'selenium-webdriver';

export const useDriver = <T = void>(
  capabilities: Capabilities | string,
  handler: (getDriver: () => WebDriver) => T,
): T | null => {
  let driver: WebDriver | undefined;

  beforeAll(() => {
    const remoteHost = process.env.SELENIUM_GRID_HOST ?? 'localhost';
    const remoteUrl = `http://${remoteHost}:4444`;
    driver = new Builder().usingServer(remoteUrl).withCapabilities(capabilities).build();
  });

  afterAll(() => {
    void driver?.quit();
  });

  return handler(() => driver as WebDriver);
};
