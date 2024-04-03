import { test, expect } from "@playwright/test";

test.describe("thesignal.com", () => {
  test("full page render", async ({ page }) => {
    await page.goto("http://127.0.0.1:8080/");

    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test("contact form", async ({ page }) => {
    await page.goto("http://127.0.0.1:8080/");

    await page.getByText("Let's Talk").first().click();

    await expect(page).toHaveScreenshot();
  });

  test("desktop navigation", async ({ page, isMobile }) => {
    test.skip(isMobile);

    await page.goto("http://127.0.0.1:8080/");

    const navigationLinks = await page.locator("header nav a").all();

    for (const link of navigationLinks) {
      /**
       * We first navigate to the top to make the navigation bar visible
       */
      await page.evaluate(() => window.scrollTo(0, 0));
      await link.click();
      await expect(page).toHaveScreenshot();
    }
  });

  test("mobile navigation", async ({ page, isMobile }) => {
    test.skip(!isMobile);

    await page.goto("http://127.0.0.1:8080/");
    await page.getByLabel("Open menu", { exact: true }).click();
    await expect(page).toHaveScreenshot();
  });
});
