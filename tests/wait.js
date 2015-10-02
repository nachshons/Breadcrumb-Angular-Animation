browser.get("http://127.0.0.1:60105/index.html");

browser.waitForAngular();

describe("wait", function () {
	var seconds = 9; // SUCCEED
//	var seconds = 8; // FAIL

	it("wait for message", function () {
		browser.wait(function() {
		   return $$(".hey").count().then(function(count) { return count > 0; });
		}, seconds * 1000);
		
		expect($$(".hey").count()).not.toBe(0);
	});
});