import { TestRoutingPage } from './app.po';

describe('test-routing App', function() {
  let page: TestRoutingPage;

  beforeEach(() => {
    page = new TestRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
