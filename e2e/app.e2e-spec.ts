import { FinanceWebPage } from './app.po';

describe('finance-web App', () => {
    let page: FinanceWebPage;

    beforeEach(() => {
        page = new FinanceWebPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('fin works!');
    });
});
