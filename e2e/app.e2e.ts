import { SpirofirePage } from './app.po';

describe('spirofire App', function() {
  let page: SpirofirePage;

  beforeEach(() => {
    page = new SpirofirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('spirofire works!');
  });
});
