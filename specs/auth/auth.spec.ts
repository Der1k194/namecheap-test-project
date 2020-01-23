import {browser, element, ExpectedConditions, by} from 'protractor';

fdescribe('Authorization page', () => {
    beforeAll(async () => {

    });

    afterEach(async () => {

    });

    // it('Welcome Back!', async () => {
    //     await authPage.loginToSite(users.username, users.password);
    //     expect(await homePage.getUserNameText()).toBe(users.username);
    // })

    fit('should have the correct elements', async () => {
        await browser.get('http://juliemr.github.io/protractor-demo/');
        await element(by.xpath('/html/body/div/div/form/input[1]')).sendKeys('11');
        await element(by.xpath('/html/body/div/div/form/input[2]')).sendKeys('13');
        await element(by.xpath('//*[@id="gobutton"]')).click();
        expect(await element(by.xpath('/html/body/div/table/tbody/tr/td[3]')).getText()).toEqual('24');
      });

})