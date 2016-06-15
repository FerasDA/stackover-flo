import { StackoverFloPage } from './app.po';

describe('stackover-flo App', function() {
  let page: StackoverFloPage;

  beforeEach(() => {
    page = new StackoverFloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
