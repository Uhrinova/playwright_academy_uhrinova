/* import { test } from "@playwright/test";
test("First Test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("pw_academy");
  await page.locator("#password").fill("Playwright321!");
  await page.locator(".btn").click();
});
---------------------------------------------------------------------------------------------
 import { test } from "@playwright/test"; - toto tam musí byt vždy !!!! 
test("First Test", async ({ page }) => { - test je funkcia, ktorá spúšťa testy - kroky sú v {} 
    await = čaká na načítanie stránky
    page = vraví že má komunikovať so stránkou / prehliadačom - dáva sa vzdy ked pracujem s prehliadačom !!! 
    lokator = hľadá elementy na stránke podľa selektorov - napr. id, class, tag, atď.
    goto = riadiaca funkcionalita /metoda - ide na zadanú URL adresu
    lokator("#username").fill("pw_academy"); - metoda na identifáciu prvkov !!! vyhľadá element s id "username" a vyplní ho textom "pw_academy"
    .fill = metoda ktorá vyplní pole /text do inputu
    .click() = klikne na element - v tomto prípade na tlačidlo s class "btn"
    pri .fill a .click ide o retazenie metód, ktoré sa volajú na lokátore- píšem jeden príkaz a na jeho výsledku sa píše druhý príkaz 
    }); 
Spúštanie testov:
    1. Terminál: npx playwright test
   
*/
// tests/learning/page-objects
// page_objects_tests.spec.ts
import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

test("Page Objects Tests", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openPmtool();
  await loginPage.fillUsername("pw_academy");
  await loginPage.fillPassword("Playwright321!");
  await loginPage.clickLogin();
});

test("Page Objects - general method", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openPmtool();
  await loginPage.login("pw_academy", "Playwright321!");
});

/*
Cvičení - Vytvořte nový test a PageObject výkazy ⌛15:00
Vytvořte složku: tests/exercises a v ní: page_objects_exercise.spec.ts vytvořte nový test: PageObjects Exercise - Login and Logout
Ve složce src/pages/pmtool Vytvořte nový Page Object pro domovskou stránku (dashboard_page.ts).
Page Object bude obsahovat:
Klik na profilovou sekci (clickProfile), lokátor: #user_dropdown
Klik na odhlášení (clickLogout), lokátor: #logout
Do testu vložte otevření PMTool, přihlášení a následně odhlášení.

*/
