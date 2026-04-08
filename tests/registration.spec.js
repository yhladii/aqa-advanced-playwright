import { test, expect } from "@playwright/test";
import RegistrationPage from "../pages/RegistrationPage";
import RegistrationForm from "../pages/RegistrationForm";
import { generateUser } from "../utils/userGenerator";

test.describe("Registration tests", () => {
  test("Positive: successful registration", async ({ page }) => {
    const regPage = new RegistrationPage(page);
    const form = new RegistrationForm(page);

    const user = generateUser();

    await regPage.openRegistration();

    await form.fillRegistrationForm({
      ...user,
      repeatPassword: user.password,
    });

    await expect(form.registerButton()).toBeEnabled();
    await form.registerButton().click();

    await expect(page).toHaveURL(/garage/);
  });
  test("Negative: name is required", async ({ page }) => {
    const regPage = new RegistrationPage(page);
    const form = new RegistrationForm(page);

    const user = generateUser();

    await regPage.openRegistration();
    await form.name().focus();
    await form.name().blur();
    await expect(page.getByText("Name required")).toBeVisible();
  });

  test("Negative: name is too short or too long", async ({ page }) => {
    const regPage = new RegistrationPage(page);
    const form = new RegistrationForm(page);

    const user = generateUser();

    await regPage.openRegistration();
    await form.name().fill("A");
    await form.name().blur();
    await expect(
      page.getByText("Name has to be from 2 to 20 characters long"),
    ).toBeVisible();
    await form.name().clear();
    await form.name().fill("Aaaaaaaaaaaaaaaaaaaaa");
    await form.name().blur();
    await expect(
      page.getByText("Name has to be from 2 to 20 characters long"),
    ).toBeVisible();
  });
  test("Negative: name is invalid", async ({ page }) => {
    const regPage = new RegistrationPage(page);
    const form = new RegistrationForm(page);

    const user = generateUser();

    await regPage.openRegistration();
    await form.name().fill("@!");
    await form.name().blur();
    await expect(page.getByText("Name is invalid")).toBeVisible();
  });
  test("Negative: last name is required", async ({ page }) => {
    const regPage = new RegistrationPage(page);
    const form = new RegistrationForm(page);

    const user = generateUser();

    await regPage.openRegistration();
    await form.lastName().focus();
    await form.lastName().blur();
    await expect(page.getByText("Last name required")).toBeVisible();
  });
  test("Negative: laast is too short or too long", async ({ page }) => {
    const regPage = new RegistrationPage(page);
    const form = new RegistrationForm(page);

    const user = generateUser();

    await regPage.openRegistration();
    await form.lastName().fill("A");
    await form.lastName().blur();
    await expect(
      page.getByText("Last name has to be from 2 to 20 characters long"),
    ).toBeVisible();
    await form.lastName().clear();
    await form.lastName().fill("Aaaaaaaaaaaaaaaaaaaaa");
    await form.lastName().blur();
    await expect(
      page.getByText("Last name has to be from 2 to 20 characters long"),
    ).toBeVisible();
  });
  test("Negative: password is incorrect", async ({ page }) => {
    const regPage = new RegistrationPage(page);
    const form = new RegistrationForm(page);

    const user = generateUser();

    await regPage.openRegistration();
    await form.password().fill("Aqqq14!");
    await form.password().blur();
    await expect(
      page.getByText(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ),
    ).toBeVisible();
    await form.password().clear();
    await form.password().fill("Aqqq14!891234567");
    await form.password().blur();
    await expect(
      page.getByText(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ),
    ).toBeVisible();
    await form.password().clear();
    await form.password().fill("qqq!891234567");
    await form.password().blur();
    await expect(
      page.getByText(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ),
    ).toBeVisible();
    await form.password().clear();
    await form.password().fill("QQQ!891234567");
    await form.password().blur();
    await expect(
      page.getByText(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ),
    ).toBeVisible();
    await form.password().clear();
    await form.password().fill("QQQ891234567");
    await form.password().blur();
    await expect(
      page.getByText(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ),
    ).toBeVisible();
    await form.password().clear();
  });
});
