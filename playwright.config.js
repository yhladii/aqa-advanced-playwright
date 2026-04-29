// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 30000,

  use: {
    baseURL: 'https://qauto.forstudy.space/',

    // HTTP Basic Auth (guest)
    httpCredentials: {
      username: 'guest',
      password: 'welcome2qauto',
    },

    browserName: 'chromium',
    headless: false, // постав true коли все запрацює
    viewport: { width: 1280, height: 720 },

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.js/,
      use: {
        baseURL: 'https://qauto.forstudy.space/',
      },
    },
    {
      name: 'chromium',
      dependencies: ['setup'],
    },
  ],
});