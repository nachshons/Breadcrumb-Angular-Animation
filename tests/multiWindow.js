var BreadcrumbPage = require("../tests/helper/breadcrumbPage.js");

browser.get("http://127.0.0.1:53128/index.html");

var firstPage = new BreadcrumbPage(browser);
var secondPage = new BreadcrumbPage(browser.forkNewDriverInstance(true, true));

describe("page tests", function () {
	beforeEach(function () {
		firstPage.goHome();
		secondPage.goHome();
	});
	
	it("check that first page is same on both apps", function () {
		expect(firstPage.getPageTitle()).toBe(secondPage.getPageTitle());
	});
	
	it("check that going to page is same as staying on page", function () {
		firstPage
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
		
		secondPage
			.clickOnCardByIndex(5)
			.clickOnCardByIndex(5)
			.clickOnCardByIndex(5)
			.clickOnCardByIndex(3);
		
		expect(firstPage.getPageTitle()).toBe(secondPage.getPageTitle());
	});
})
