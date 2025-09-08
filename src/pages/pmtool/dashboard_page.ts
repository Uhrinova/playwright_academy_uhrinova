import { Locator, Page } from "@playwright/test";
import { LoginPage } from "./login_page.ts";

export class DashboardPage {
  readonly page: Page;
  readonly profileButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("#user_dropdown > a");
    //this.logoutButton = page.locator("//a[normalize-space()='Logoff']");
    this.logoutButton = page.locator("#logout > a");
  }
  //Metódy!!!!!!!!!!!!!!!!!!!!!!!!!!
  async clickProfile(): Promise<this> {
    await this.profileButton.click();
    return this;
  }

  async clickLogout(): Promise<LoginPage> {
    await this.logoutButton.click();
    return new LoginPage(this.page);
  }
}
