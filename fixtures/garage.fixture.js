const { test: base, expect } = require('@playwright/test');
const { GaragePage } = require('../pages/GaragePage');

const test = base.extend({
  userGaragePage: async ({ page }, use) => {
    const garagePage = new GaragePage(page);

    await garagePage.goto();

    await use(garagePage);
  },
});

module.exports = { test, expect };