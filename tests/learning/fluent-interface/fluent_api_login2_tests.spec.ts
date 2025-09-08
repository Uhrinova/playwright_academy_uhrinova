//najskor si urobím inštanciu objektu ktorú si uložím do premennej a potom začnem písat jednotlivé kroky
import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

test("fluent interfece - login Test", async ({ page }) => {
    const loginPage = new LoginPage(page);//nová instancia 

    await loginPage.openPmtool()// takto vždy začínam 
    .then((login)=> login.fillUsername("pw_academy"))
    .then((login)=> login.fillPassword("Playwright321!"))
    .then((login)=> login.clickLogin())
    .then((dashbord)=> dashbord.clickProfile())
    .then((dashbord)=> dashbord.clickLogout());

//púštam cez-  npx playwright test --ui

});
