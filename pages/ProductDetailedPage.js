class ProductDetailedPage {

constructor(productPage) {
    this.productPage = productPage;
    this.addtocart = productPage.locator('div._1psv1zeb9._1psv1ze0._7dzyg20._1psv1ze9l._1psv1ze7o._1psv1ze2u._1psv1ze53').locator('div').first();
    this.cartbutton = productPage.locator("[title='Cart']");
}

async addProductToCart()
{
   await this.addtocart.click();
}

async clickOnCart()
{
   await this.cartbutton.click();
}

};

module.exports = {ProductDetailedPage}