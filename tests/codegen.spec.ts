import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Email:' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('shyamkadam7972@gmail.com');
  await expect(page.getByRole('textbox', { name: 'Password:' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password:' }).fill('S');
  await page.getByRole('textbox', { name: 'Password:' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password:' }).fill('Shyam@992');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForTimeout(8000);
  await page.getByRole('link', { name: 'Log out' }).click();
});