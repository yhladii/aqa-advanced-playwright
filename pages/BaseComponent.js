export default class BaseComponent {
  constructor(page, rootSelector) {
    this.page = page
    this.root = page.locator(rootSelector)
  }

  locator(selector) {
    return this.root.locator(selector)
  }

  byText(text) {
    return this.root.getByText(text)
  }
}