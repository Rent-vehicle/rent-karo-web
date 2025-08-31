// tests/home.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  // Reuse authenticated session
  test.use({ storageState: "tests/.auth/user.json" });

  test("should load home page successfully", async ({ page }) => {
    await page.goto("/home");
    await page.waitForLoadState("networkidle");

    // Check page title
    await expect(page).toHaveTitle(/Bike Rentals in Dehradun, Uttarakhand/);

    // Verify hero section
    await expect(page.locator("h1")).toContainText("Rent the Perfect Bike");
  });

  test("should display featured bikes section", async ({ page }) => {
    await page.goto("/home");

    // Check featured bikes section
    await expect(page.getByRole("heading", { name: "Featured Bikes" })).toBeVisible();

    // Verify bike cards
    const bikeCards = page.locator('[data-testid="bike-card"]');
    await expect(bikeCards).toHaveCount(3);
  });

  test("should display stats section", async ({ page }) => {
    await page.goto("/home");

    // Verify stats numbers
    await expect(page.locator("text=150+")).toBeVisible();
    await expect(page.locator("text=25+")).toBeVisible();
    await expect(page.locator("text=10K+")).toBeVisible();
    await expect(page.locator("text=15+")).toBeVisible();
  });

  test("should display how it works section", async ({ page }) => {
    await page.goto("/home");

    // Check section heading
    await expect(page.getByRole("heading", { name: "Featured Bikes" })).toBeVisible();

    // Verify steps
    await expect(page.locator("text=Step 1")).toBeVisible();
    await expect(page.locator("text=Step 2")).toBeVisible();
    await expect(page.locator("text=Step 3")).toBeVisible();
  });

  test("should have working navigation buttons", async ({ page }) => {
    await page.goto("/home");

    const browseButton = page.getByRole("button", { name: "Browse Bikes" });
    const locationsButton = page.getByRole("button", { name: "View Locations" });

    await expect(browseButton).toBeVisible();
    await expect(locationsButton).toBeVisible();

    // Optionally test navigation
    // await browseButton.click();
    // await expect(page).toHaveURL(/bikes/);
  });
});
