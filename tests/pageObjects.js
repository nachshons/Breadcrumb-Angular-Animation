var BreadcrumbPage = require("../tests/helper/breadcrumbPage.js");

browser.get("http://127.0.0.1:60105/index.html");

var breadcrumbPage = new BreadcrumbPage(browser);

describe("page tests", function () {
	beforeEach(function () {
		breadcrumbPage.goHome();
	});

	it("sanity check", function () {
		expect(true).toBe(true);
	});
	
	it("check that first page is card 9", function () {
		expect(breadcrumbPage.getPageTitle()).toContain("Current card is 9");
	});
	
	it("check that page has card with 3 on it", function () {
		expect(breadcrumbPage.getCardTextByIndex(3)).toBe("3");
		expect(breadcrumbPage.getCardsCount()).toBe(9);
	});
	
	it("check that the last page we went to was Card 1", function () {
		breadcrumbPage.clickOnCardByIndex(3);
		breadcrumbPage.clickOnCardByIndex(2);
		breadcrumbPage.clickOnCardByIndex(1);

		expect(breadcrumbPage.getLastBreadcrumbText()).toBe("Card 1");
	});
	
	
	it("go to page 3 after many 1's", function () {
		breadcrumbPage
			.clickOnCardByIndex(1)
			.clickOnCardByIndex(1)
			.clickOnCardByIndex(1)
			.clickOnCardByIndex(1)
			.clickOnCardByIndex(1)
			.clickOnCardByIndex(1)
			.clickOnCardByIndex(1)
			.clickOnCardByIndex(1)
			.clickOnCardByIndex(1)
			.addCard().addCard().clickOnCardByIndex(3);
		
		expect(breadcrumbPage.getLastBreadcrumbText()).toBe("Card 3");
	});
})