const { SearchPage } = require('../pages/SearchPage');

class PoManager {

    constructor(page) 
    {
    this.page = page;
    this.searchPageobj = new SearchPage(page);
    }

    
    getSearchPage()
    {
        return this.searchPageobj;
    }
}

module.exports = {PoManager}