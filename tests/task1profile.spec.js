const { test, expect } = require('../fixtures/garage.fixture');

test('should mock profile data and verify UI', async ({ page }) => {
  await page.route('**/api/users/profile', async (route) => {
    const mockedResponse = {
      status: 'ok',
      data: {
        name: 'Yuliia',
        lastName: 'Hladii',
      },
    };

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockedResponse),
    });
  });

  await page.goto('/panel/profile');

  await expect(page.getByText('Yuliia')).toBeVisible();
  await expect(page.getByText('Hladii')).toBeVisible();
});