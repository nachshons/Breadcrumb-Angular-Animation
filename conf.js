exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: { 'browserName': 'chrome' },
	framework: 'jasmine2',
	directConnect: true,
	//specs: ['tests/*.js'],
	suites: {
		basic: 'tests/basic.js',
		pageObject: 'tests/pageObjects.js',
		multiWindow: 'tests/multiWindow.js',
		wait: 'tests/wait.js'
	},
	jasmineNodeOpts: { defaultTimeoutInterval: 400000 },
	onPrepare: function () {
//		var disableNgAnimate = function() {
//			angular.module('disableNgAnimate', []).run(function($animate) {
//				$animate.enabled(false);
//			});
//		};
//		
//		browser.addMockModule('disableNgAnimate', disableNgAnimate);
	}
};

