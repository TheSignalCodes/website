import { test, expect } from "@playwright/test";
import { delay } from "./utils";

test("thesignal.com", async ({ page }) => {
  await page.goto("http://127.0.0.1:8080/");

  await expect(page).toHaveScreenshot({ fullPage: true });
});
