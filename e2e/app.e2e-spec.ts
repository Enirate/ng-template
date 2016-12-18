import { NgTemplatePage } from './app.po';

describe('ng-template App', function() {
  let page: NgTemplatePage;

  beforeEach(() => {
    page = new NgTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
