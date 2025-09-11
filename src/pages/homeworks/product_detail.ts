import { Locator, Page } from "@playwright/test";

export class ProductDetail {
  readonly url: string =
    "https://tredgate.com/eshop/index.php?route=product/product&product_id=40";
  readonly page: Page;
  readonly productName: Locator;
  readonly brandLink: Locator;
  readonly productCode: Locator;
  readonly availabilityStatus: Locator;
  readonly price: Locator;
  readonly exTax: Locator;
  readonly quantityInput: Locator;
  readonly addToCartButton: Locator;
  readonly heartButton: Locator;
  readonly compareButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productName = page.locator("#content h1");
    this.brandLink = page.locator("li:has-text('Brand:') a");
    this.productCode = page.locator("li:has-text('Product Code:')");
    this.availabilityStatus = page.locator("li:has-text('Availability:')");
    this.price = page.locator("ul[class='list-unstyled'] li h2");
    this.exTax = page.locator("li:has-text('Ex Tax:')");
    this.quantityInput = page.locator("#input-quantity");
    this.addToCartButton = page.locator("#button-cart");
    this.heartButton = page.locator(
      '.btn-group [data-original-title="Add to Wish List"]'
    );
    this.compareButton = page.locator(
      '.btn-group [data-original-title="Compare this Product"]'
    );
  }
  async openDetail(): Promise<this> {
    await this.page.goto(this.url);
    return this;
  }

  async clickAddToCart(): Promise<this> {
    await this.addToCartButton.click();
    return this;
  }
}
