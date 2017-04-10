import { browser, by, element } from 'protractor';

export class FinanceWebPage {
    public navigateTo(): any {
        return browser.get('/');
    }

    public getParagraphText(): any {
        return element(by.css('fin-root h1')).getText();
    }
}
