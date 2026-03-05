const {test} = require('@playwright/test');
const { PoManager } = require('../pageObject/poManager');

test("search product", async ({page}) =>
{
const pomObj = new PoManager(page);
const productName = "Laptop";

//search
const searchPage = pomObj.getSearchPage();
await searchPage.goto();
await searchPage.searchProductField(productName);
});

