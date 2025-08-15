//tags_tests.spec.ts;
// tests/learning/tags
import { test } from "@playwright/test";
// Update the import path if the file exists elsewhere, for example:
import { LoginPage } from "../../../src/pages/pmtool/login_page";
// Or, if the file does not exist, create it at the specified path.

test("Tag Test", { tag: "@mujTag" }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openPmtool();
});

test("Without Tag Test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openPmtool();
});
