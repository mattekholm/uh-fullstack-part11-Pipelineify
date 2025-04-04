// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3001/');

  const locator = await page.getByText('PHONEBOOK')
  await expect(locator).toBeVisible()
});

