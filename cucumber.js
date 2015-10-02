exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: { 'browserName': 'chrome' },
    framework: 'cucumber',
    directConnect: true,
    specs: ['features/*.feature'],
    jasmineNodeOpts: { defaultTimeoutInterval: 400000 }
};

