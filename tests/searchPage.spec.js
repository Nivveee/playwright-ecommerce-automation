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

//search result page of laptop and applying filter
const searchResultPage = pomObj.getSearchResultPage();
await searchResultPage.searchResultField();
await searchResultPage.searchFilterField();

//open product
const productPage = await searchResultPage.openFirstProduct();

//product detailed page
const productDetailedCartPage = pomObj.getproductdetailedCartPage(productPage);
await productDetailedCartPage.addProductToCart();
await productDetailedCartPage.clickOnCart();

//place Order
const placeOrderPage = pomObj.getPlaceOrderPage(productPage);
await placeOrderPage.clickOnPlaceOrder();
await placeOrderPage.verifyPageRedirectToLoginPage();
});

