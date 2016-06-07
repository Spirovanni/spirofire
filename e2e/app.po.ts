export class SpirofirePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('spirofire-app h1')).getText();
  }
}
