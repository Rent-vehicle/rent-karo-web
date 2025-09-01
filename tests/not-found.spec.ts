import { test, expect } from "@playwright/test";

test.describe("404 Not Found Page", () => {
  test("should display 404 page for non-existent routes", async ({ page }) => {
    await page.goto("/non-existent-page");

    await expect(page.locator("h1")).toContainText("Page Not Found");
    await expect(page.getByText("404")).toBeVisible();
  });

  test("should display correct error message", async ({ page }) => {
    await page.goto("/non-existent-page");

    await expect(page.getByText("Sorry, we couldn't find the")).toBeVisible();
  });

  test("should have working navigation buttons", async ({ page }) => {
    await page.goto("/non-existent-page");

    const homeLink = page.getByRole("link", { name: "Go to Home" });
    await expect(homeLink).toBeVisible();
    await expect(homeLink).toHaveAttribute("href", "/home");
  });

  test("should have proper styling and layout", async ({ page }) => {
    await page.goto("/non-existent-page");

    const container = page.locator('div[class*="min-h-screen"]');
    await expect(container).toBeVisible();

    const card = page.locator('div[class*="rounded-2xl"]');
    await expect(card).toBeVisible();
  });
});
