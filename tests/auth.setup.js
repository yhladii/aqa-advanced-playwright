const { test: setup, expect } = require('@playwright/test');

setup('login and save login state', async ({ page }) => {
  await page.goto('/');

  const signInBtn = page.getByRole('button', { name: 'Sign In' });

  await signInBtn.waitFor();
  await signInBtn.click();

  await page.locator('#signinEmail').fill('yhladiiaqa@gmail.com');
  await page.locator('#signinPassword').fill('Qwerty123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/garage/);

  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });
});