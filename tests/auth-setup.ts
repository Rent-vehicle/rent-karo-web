import { test as setup, expect } from "@playwright/test";
import ENV_CONFIG from "../src/constant/env-config";
import fs from "fs";
import path from "path";

const authFile = path.resolve("tests/.auth/user.json");
const authDir = path.dirname(authFile);

if (!fs.existsSync(authDir)) {
  fs.mkdirSync(authDir, { recursive: true });
}

setup("authenticate", async ({ page }) => {
  const baseUrl = ENV_CONFIG.FE_URL || "http://localhost:3001";
  await page.goto(`${baseUrl}/login`);

  // Wait until email field is visible
  const emailInput = page.getByPlaceholder("Enter your email");
  await expect(emailInput).toBeVisible({ timeout: 100000 });
  await emailInput.fill(ENV_CONFIG.TEST_EMAIL || "jiteshbhatt.dev@gmail.com");

  // Password
  const passwordInput = page.getByPlaceholder("Enter your password");
  await passwordInput.fill(ENV_CONFIG.TEST_PASSWORD || "Test@1234");

  // Submit
  await page.getByRole("button", { name: "Sign In", exact: true }).click();

  // Wait until network is idle and page redirects
  await page.waitForLoadState("networkidle");

  // Confirm login worked (look for app branding)
  await expect(page.getByRole("link", { name: "BikeRent" })).toBeVisible();

  // Save auth state
  await page.context().storageState({ path: authFile });
});
