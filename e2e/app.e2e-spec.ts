import { SafariErrorAppPage } from './app.po';

describe('safari-error-app App', () => {
  let page: SafariErrorAppPage;

  beforeEach(() => {
    page = new SafariErrorAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
