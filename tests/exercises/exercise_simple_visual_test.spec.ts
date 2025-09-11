import { expect, test } from "@playwright/test";

test("Exercise: Simple Visual Test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/contact.html");
  await expect(page).toHaveScreenshot("exercise_simple_visual.png");
});
/*import { expect, test } from "@playwright/test";

test.describe("Visual Tests excercise", () => {
  test("Simple Visual Test excercise", async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/contact.html");
    await expect(page).toHaveScreenshot("simple_test_excercise.png");
  });
});
*/
//Spustenie - npx playwright test visual_tests.spec.ts