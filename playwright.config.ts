import { defineConfig, devices } from "@playwright/test";
import ENV_CONFIG from "./src/constant/env-config";

const FE_URL = ENV_CONFIG.FE_URL || "http://localhost:3001";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",

  use: {
    /* ✅ Always defined */
    baseURL: FE_URL,
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "setup",
      testMatch: /.*auth-setup\.ts/,
    },
    {
      name: "authenticated",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "tests/.auth/user.json", // moved to tests/.auth
      },
      dependencies: ["setup"],
    },
    {
      name: "unauthenticated",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 12"] },
    },
  ],

  webServer: {
    command: "npm run dev",
    url: FE_URL, // ✅ matches baseURL
    reuseExistingServer: !process.env.CI,
  },
});
