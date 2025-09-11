import { test, expect } from "@playwright/test";
import { ProductDetail } from "../../src/pages/homeworks/product_detail.ts";

test.describe("iPhone Product Page", () => {
  let productDetail: ProductDetail;

  test.beforeEach(async ({ page }) => {
    productDetail = new ProductDetail(page);
    await productDetail.openDetail();
  });

  test("Visible Elements", async () => {
    await expect(productDetail.productName).toBeVisible();
    await expect(productDetail.brandLink).toBeVisible();
    await expect(productDetail.productCode).toBeVisible();
    await expect(productDetail.availabilityStatus).toBeVisible();
    await expect(productDetail.price).toBeVisible();
    await expect(productDetail.exTax).toBeVisible();
    await expect(productDetail.quantityInput).toBeVisible();
    await expect(productDetail.addToCartButton).toBeVisible();
    await expect(productDetail.heartButton).toBeVisible();
    await expect(productDetail.compareButton).toBeVisible();
  });

  test("Verify Texts", async () => {
    await expect(productDetail.productName).toHaveText("iPhone");
    await expect(productDetail.brandLink).toHaveText("Apple");
    await expect(productDetail.productCode).toContainText(
      "Product Code: product 11"
    );
    await expect(productDetail.availabilityStatus).toContainText("In Stock");
    await expect(productDetail.price).toHaveText("$101.00");
    await expect(productDetail.exTax).toContainText("Ex Tax: $101.00");
    await expect(productDetail.addToCartButton).toHaveText("Add to Cart");
  });

  test("Verify 'Add to Cart'", async ({ page }) => {
    await productDetail.clickAddToCart();
    const successAlert = page.locator(".alert-success");
    await expect(successAlert).toBeVisible();
    await expect(successAlert).toContainText(
      "Success: You have added iPhone to your shopping cart!"
    );
  });
});
