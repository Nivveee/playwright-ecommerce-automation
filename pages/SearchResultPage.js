const { expect } = require('@playwright/test');
class SearchResultPage{

    constructor(page)
    {
        this.page = page;
        this.searchResult = page.locator("span[class='_Omnvo']");
        this.clickBrandFilter = page.getByText("Brand", { exact: true });
        this.selectBrand = page.locator("[title='Lenovo']");
        this.clickRamCapcityFilter = page.getByText("RAM Capacity", { exact: true }).first();
        this.selectRam = page.locator("[title='32 GB']");
        this.selectProcessor = page.locator('[title="Core i7"]').first();
        this.priceHightoLow = page.getByText("Price -- High to Low");
        this.clickOnFirstProduct =  page.locator(".RG5Slk").first();
    }
   
    async searchResultField ()
    {   
        await expect (this.searchResult).toBeVisible();
        await expect (this.searchResult).toContainText("Laptop");
    }

    async searchFilterField()
    {
        await this.clickBrandFilter.click();
        await this.selectBrand.click();
        await this.clickRamCapcityFilter.click();
        await this.selectRam.click();
        await this.selectProcessor.click();
        await this.priceHightoLow.click();
    }

    async openFirstProduct(){

        const [productPage] = await Promise.all([
        this.page.waitForEvent('popup'),
        this.clickOnFirstProduct.click()
        ]);
        await productPage.waitForLoadState('domcontentloaded');
        return productPage;
    }   
}

module.exports = {SearchResultPage};
