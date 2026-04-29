const { test, expect } = require('../fixtures/garage.fixture');

test('user can open garage page', async ({ userGaragePage }) => {
  await userGaragePage.isOpened();
});

test('user can click add car button', async ({ userGaragePage }) => {
  await userGaragePage.clickAddCar();
});