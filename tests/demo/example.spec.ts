import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  // Arrange - odemo na stranicu 
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  // Act - koraci
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  // Assert - provera
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
