import { MovieDbPage } from './app.po';

describe('movie-db App', () => {
  let page: MovieDbPage;

  beforeEach(() => {
    page = new MovieDbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
