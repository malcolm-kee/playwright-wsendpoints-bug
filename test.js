const playwright = require('playwright');

(async function test() {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    const browserApp = await playwright[browserType].launchBrowserApp();

    console.log(`${browserType} having wsEndpoint: ${browserApp.wsEndpoint()}`);

    await browserApp.close();
  }
})();
