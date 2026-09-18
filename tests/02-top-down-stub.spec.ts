import { test, expect } from '@playwright/test';

test('Top-Down Stub: Cart Integration with My Name', async ({ page }) => {
  await page.goto('about:blank');

  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Stub Cart</title>
      </head>
      <body>
        <h1>Stub Shopping Cart</h1>
        <div class="cart_list" data-test="stub-cart-name">
          ผู้พัฒนา: นายพีรทัด หงษ์ทอง
        </div>
      </body>
    </html>
  `);

  await expect(page.locator('[data-test="stub-cart-name"]')).toBeVisible();
  await expect(page.locator('[data-test="stub-cart-name"]')).toContainText('นายพีรทัด หงษ์ทอง');
});