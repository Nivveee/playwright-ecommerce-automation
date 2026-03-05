class SearchPage {

    constructor (page) 
    {
        this.page = page;
        this.loginCloseButton = page.locator("[role='button']");
        this.productSearchField = page.getByRole('textbox', { name: 'Search for Products, Brands and More' });
    }

    async goto()
    {
        await this.page.goto("https://www.flipkart.com/");
    }

    async searchProductField(productName)
    {
        if (await this.loginCloseButton.isVisible())
        {
        await this.loginCloseButton.click();
        }
        await this.productSearchField.fill(productName);
        await this.productSearchField.press('Enter');
    }
}

module.exports = { SearchPage };