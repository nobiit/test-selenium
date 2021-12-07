import { Capabilities } from 'selenium-webdriver';
import { useDriver } from './setup';

describe('Test', () => {
  for (const browser of ['chrome', 'firefox', 'edge']) {
    describe(browser, () =>
      useDriver((Reflect.get(Capabilities, browser) as () => Capabilities)(), (getDriver) => {
        test(
          `Go to Google by ${browser}`,
          async () => {
            const driver = getDriver();
            await driver.get('https://google.com');
            await driver.wait(async () => driver.executeScript(`return document.readyState === 'complete'`));

            expect(await driver.getTitle()).toEqual('Google');
            await driver.sleep(1000);
          },
          30 * 1000,
        );
        test(
          `Go to Facebook by ${browser}`,
          async () => {
            const driver = getDriver();
            await driver.get('https://facebook.com');
            await driver.wait(async () => driver.executeScript(`return document.readyState === 'complete'`));

            expect(await driver.getTitle()).toEqual('Facebook - Log In or Sign Up');
            await driver.sleep(1000);
          },
          30 * 1000,
        );
        test(
          `Go to YouTube by ${browser}`,
          async () => {
            const driver = getDriver();
            await driver.get('https://youtube.com');
            await driver.wait(async () => driver.executeScript(`return document.readyState === 'complete'`));

            expect(await driver.getTitle()).toEqual('YouTube');
            await driver.sleep(1000);
          },
          30 * 1000,
        );
      }),
    );
  }
});
