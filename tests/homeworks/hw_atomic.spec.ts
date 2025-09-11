import { test, expect } from "@playwright/test";
import { ProductDetail } from "../../src/pages/homeworks/product_detail.ts";

test.describe("iPhone Product Page", () => {
  let productDetail: ProductDetail;

  test.beforeEach(async ({ page }) => {
    productDetail = new ProductDetail(page);
    await productDetail.openDetail();
  });

  test("Visible Elements", async () => {
   
    await expect.soft(productDetail.quantityInput).toBeVisible();
    await expect.soft(productDetail.addToCartButton).toBeVisible();
    await expect.soft(productDetail.compareButton).toBeVisible();
  });

  test("Verify Texts", async () => {
    await expect.soft(productDetail.productName).toBeVisible();
    await expect.soft(productDetail.productName).toHaveText("iPhone");
    await expect.soft(productDetail.brandLink).toBeVisible();
    await expect.soft(productDetail.brandLink).toHaveText("Apple");
    await expect.soft(productDetail.productCode).toBeVisible();
    await expect
      .soft(productDetail.productCode)
      .toContainText("Product Code: product 11");
    await expect.soft(productDetail.availabilityStatus).toBeVisible();
    await expect
      .soft(productDetail.availabilityStatus)
      .toContainText("In Stock");
    await expect.soft(productDetail.price).toBeVisible();
    await expect.soft(productDetail.price).toHaveText("$101.00");
 await expect.soft(productDetail.exTax).toBeVisible();
    await expect.soft(productDetail.exTax).toContainText("Ex Tax: $101.00");

    
  });

  test("Verify 'Add to Cart'", async ({ page }) => {
    await expect.soft(productDetail.heartButton).toBeVisible();
    await expect.soft(productDetail.addToCartButton).toHaveText("Add to Cart");
    await productDetail.clickAddToCart();
    const successAlert = page.locator(".alert-success");
    await expect.soft(successAlert).toBeVisible();
    await expect
      .soft(successAlert)
      .toContainText("Success: You have added iPhone to your shopping cart!");
  });
});
