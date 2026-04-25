class GaragePage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/panel/garage');
  }

  async isOpened() {
    await this.page.waitForURL(/garage/);
  }

  async clickAddCar() {
    await this.page.getByRole('button', { name: 'Add car' }).click();
  }
}

module.exports = { GaragePage };