import { Locator, Page } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  //readonly url ="https://tredhttps://tredgate.com/pmtool/index.php?module=dashboard/gate.com/pmtool";- adresa tam nieje!!!
  readonly profileButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
  }
  //Metódy!!!!!!!!!!!!!!!!!!!!!!!!!!
  async clickProfile() {
    await this.profileButton.click();
  }

  async clickLogout() {
    await this.logoutButton.click();
  }
}
