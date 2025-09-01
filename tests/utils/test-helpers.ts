import { Page, expect } from "@playwright/test";

export async function waitForPageLoad(page: Page) {
  await page.waitForLoadState("networkidle");
}

export async function checkElementVisible(page: Page, selector: string) {
  await expect(page.locator(selector)).toBeVisible();
}

export async function checkElementNotVisible(page: Page, selector: string) {
  await expect(page.locator(selector)).not.toBeVisible();
}

export async function clickElement(page: Page, selector: string) {
  await page.click(selector);
}

export async function fillInput(page: Page, selector: string, value: string) {
  await page.fill(selector, value);
}

export async function checkTextContent(page: Page, selector: string, text: string) {
  await expect(page.locator(selector)).toContainText(text);
}

export async function setMobileViewport(page: Page) {
  await page.setViewportSize({ width: 375, height: 667 });
}

export async function setDesktopViewport(page: Page) {
  await page.setViewportSize({ width: 1280, height: 720 });
}

export async function takeScreenshot(page: Page, name: string) {
  await page.screenshot({ path: `test-results/${name}.png` });
}
