export default class BasePage {
  constructor(page) {
    this.page = page;
  }
  async visit(url = "/") {
    await this.page.goto(url);
  }
  async clickByText(text) {
    await this.page.getByRole("button", { name: text }).click();
  }
}
