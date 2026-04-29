const { test: base, expect } = require("@playwright/test");
const { GaragePage } = require("../pages/GaragePage");

const test = base.extend({
  userGaragePage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: "playwright/.auth/user.json",
    });

    const page = await context.newPage();

    const garagePage = new GaragePage(page);

    await garagePage.goto();

    await use(garagePage);

    await context.close();
  },
});

module.exports = { test, expect };
