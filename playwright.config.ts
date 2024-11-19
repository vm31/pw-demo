import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true, // Use environment variable
  },
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
