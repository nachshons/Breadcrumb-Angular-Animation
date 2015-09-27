browser.get("http://127.0.0.1:53128/index.html");

describe("basic app tests", function () {
	var breadcrumbs = $$(".breadcrumb li *");
	var lastBreadcrumb = breadcrumbs.last();
	
	it("sanity check", function () {
		expect(true).toBe(true);
	});
	
	it("check that first page is card 3", function () {
		$(".logo").click();
		expect($("h2").getText()).toContain("Current card is 9");
	});
	
	it("check that page has card with 1 on it", function () {
		$(".logo").click();
		expect($$(".card a").get(2).getText()).toBe("3");
		expect($$(".card a").count()).toBe(9);
	});
	
	it("check that card breadcrumb", function () {
		$(".logo").click();
		
		$$(".card a").get(2).click();
		$$(".card a").get(1).click();
		$$(".card a").get(0).click();
		expect(lastBreadcrumb.getText()).toBe("Card 1");
	});
	
	
	it("check that card breadcrumb", function () {
		$(".logo").click();
		
		$$(".card a").get(0).click();
		$$(".card a").get(0).click();
		$$(".card a").get(0).click();
		$$(".card a").get(0).click();
		$$(".card a").get(0).click();
		$$(".card a").get(0).click();
		$$(".card a").get(0).click();
		$$(".card a").get(0).click();
		$$(".card a").get(0).click();
		$$(".card a").get(0).click();
		$$(".card a").get(0).click();
		$$(".card a").get(0).click();
		$(".plus-card","+").click().click();
		$$(".card a").get(2).click();
		expect(lastBreadcrumb.getText()).toBe("Card 3");
	});
})