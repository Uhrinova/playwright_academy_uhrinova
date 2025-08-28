import { Locator, Page } from "@playwright/test";

export class LoginPage {
    //Vlastnosti - properties, premenné triedy
  readonly page: Page; //Page je trieda z Playwrightu vyberá sa z výberovníka !
  readonly url = "https://tredgate.com/pmtool"; //url adresa je len na prvej stránke kde sa bude otvárat aplikácia
  readonly usernameInput: Locator; //Location vyberám z výberovníka a tak s ami do imortu doplní Locator
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    //konstruktor je špeciálna metóda na inicializáciu objektu
    this.page = page; //this je odkaz na aktuálny objekt, do premennej page v triede sa uloží page, ktorú dostane z testu.
    //! V prípade nastavovania lokátorov, nedávame await!!!
    this.usernameInput = page.locator("#username"); //page.locator() je metóda, ktorá nájde element na stránke podľa CSS selektora/ lokátora #username.  hovorí: "Nájdi element, ktorého id je 'username'".
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator(".btn"); // hovorí: "Nájdi element, ktorého class je 'btn'".
  }

  //METODY :
  // Při vytváření metod doporučím přístup začít s atomickými (malými) metodami s jedním krokem a pak vytvářet sdružující metody
  // Například: typeUsername - jeden krok, login - sdružení více kroků
  // Atomické metody používáme, když danou funkcionalitu testujeme a sdružující metody například pro preconditions jiných testů

  async openPmtool() {
    await this.page.goto(this.url);
  }

  // testovacie dáta nikdy neukladáme do page objectu  tie sa ukladajú do testu
  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string) {
    //ked je fill - niečo vyplnam tak je to vždy string
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}
