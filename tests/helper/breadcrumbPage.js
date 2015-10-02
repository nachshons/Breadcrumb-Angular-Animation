function BreadcrumbPage (browser) {
	var breadcrumbs = browser.$$(".breadcrumb li *");
	var cards = browser.$$(".card a");
	var addBtn = browser.$(".plus-card","+");
	
	this.getBreadcrumbTextByIndex = function (index) {
		return breadcrumbs.get(index - 1).getText();
	}
	
	this.getLastBreadcrumbText = function () {
		return breadcrumbs.last().getText();
	}
	
	this.clickOnBreadcrumbByIndex = function (index) {
		breadcrumbs.get(index).click();
		
		return this;
	}
	
	this.getCardTextByIndex = function (index) {
		return cards.get(index - 1).getText();
	}
	
	this.clickOnCardByIndex = function (index) {
		cards.get(index - 1).click();
		
		return this;
	}
	
	this.getCardsCount = function () {
		return cards.count();
	}
	
	this.addCard = function () {
		addBtn.click();
		
		return this;
	}
	
	this.goHome = function () {
		browser.$(".logo").click();
		
		return this;
	}
	
	this.getPageTitle = function () {
		return browser.$("h2").getText()
	}

	this.close = function () {
		browser.close();
	}
}

module.exports = BreadcrumbPage;