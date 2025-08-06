import { test } from "@playwright/test";
test("First Test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("pw_academy");
  await page.locator("#password").fill("Playwright321!");
  await page.locator(".btn").click();
});

/*  import { test } from "@playwright/test"; - toto tam musí byt vždy !!!! 
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
