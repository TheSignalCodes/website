import { defineConfig, devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  expect: {
    timeout: 15000,
  },
  use: {
    trace: "on-first-retry",
    video: "on",
  },
  projects: [
    {
      name: "Chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Chrome XL",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 3840, height: 2160 },
      },
    },
    {
      name: "Firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "Safari",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "Edge",
      use: { ...devices["Desktop Edge"] },
    },
    {
      name: "Mobile iOS",
      use: { ...devices["iPhone 13"] },
    },
    {
      name: "Mobile Android",
      use: { ...devices["Pixel 7"] },
    },
  ],
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:8080",
    reuseExistingServer: !process.env.CI,
  },
});
