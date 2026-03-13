const { SearchPage } = require('../pages/SearchPage');
const { SearchResultPage } = require('../pages/SearchResultPage');
const { ProductDetailedPage } = require('../pages/ProductDetailedPage');
const { PlaceOrderPage } = require('../pages/PlaceOrderPage');

class PoManager {

    constructor(page) 
    {
    this.page = page;
    this.searchPageobj = new SearchPage(page);
    this.searchResultPageobj = new SearchResultPage(page);
   //this.productCartPageobj = new ProductDetailedPage(page);
    }

    getSearchPage()
    {
        return this.searchPageobj;
    }

    getSearchResultPage()
    {
        return this.searchResultPageobj;
    }

    getproductdetailedCartPage(productPage)
    {
        return new ProductDetailedPage(productPage);
    }

    getPlaceOrderPage(productPage)
    {
        return new PlaceOrderPage(productPage);
    }
}

module.exports = {PoManager};