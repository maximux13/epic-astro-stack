import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:4321");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Monoku/);
});

test("has a footer", async ({ page }) => {
  await page.goto("http://localhost:4321");

  // Expect an element "to be visible".
  await expect(page.locator("footer")).toBeVisible();

  // Expect an element "to have text" to match current year.
  const currentYear = new Date().getFullYear();
  await expect(page.locator("footer")).toHaveText(
    new RegExp(`© ${currentYear}`),
  );
});
