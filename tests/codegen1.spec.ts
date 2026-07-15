import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('shyamkadam7972@gmail.com');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password:' }).fill('Shyam@9923');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: '$25 Virtual Gift Card', exact: true }).click();
  await page.locator('#add-to-cart-button-2').click();
  await page.getByRole('link', { name: 'My account' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});