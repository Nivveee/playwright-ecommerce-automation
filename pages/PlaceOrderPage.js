const { expect } = require('@playwright/test');
class PlaceOrderPage {

constructor(productPage)
{
     this.productPage = productPage;
     this.placeOrder = productPage.getByText('Place Order ', { exact: true });
     this.redirectVerifyLoginPage = productPage.getByText('Log in to complete your shopping');
}

async clickOnPlaceOrder()
{
  await this.placeOrder.click();
}

async verifyPageRedirectToLoginPage()
{
   await expect (this.redirectVerifyLoginPage).toBeVisible();
}

};

module.exports = {PlaceOrderPage}

