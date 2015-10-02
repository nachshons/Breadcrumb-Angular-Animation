var BreadcrumbPage = require("../tests/helper/breadcrumbPage.js");
var breadcrumbPage = new BreadcrumbPage(browser);


// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

// Chai expect().to.exist syntax makes default jshint unhappy.
// jshint expr:true

module.exports = function() {
    this.Given('I am on the home page', function (next) {
        browser.get('http://127.0.0.1:60105/index.html');
        next();
    });

    this.Then(/^the title should contain "([^"]*)"$/, function (text, next) {
        expect(breadcrumbPage.getPageTitle()).to.eventually.equal(text).and.notify(next);
    });

    this.Then(/^card number (\d+) should be (\d+)$/, function (cardNumber, cardText, next) {
        expect(breadcrumbPage.getCardTextByIndex(cardNumber)).to.eventually.equal(cardText.toString()).and.notify(next);
    });

    this.Then(/^number of cards should be (\d+)$/, function (count, next) {
        expect(breadcrumbPage.getCardsCount()).to.eventually.equal(+count).and.notify(next);
    });

    this.When(/^I click on card number (\d+)$/, function (cardNumber, next) {
        breadcrumbPage.clickOnCardByIndex(+cardNumber);
        next();
    });

    this.When(/^I click on card number (\d+), (\d+) times$/, function (cardNumber, times, next) {
        for (var i = 0; i <= times; i++) {
            breadcrumbPage.clickOnCardByIndex(+cardNumber);
        }
        next();
    });

    this.Then(/^the last breadcrumb should be "([^"]*)"$/, function (text, next) {
        expect(breadcrumbPage.getLastBreadcrumbText()).to.eventually.equal(text).and.notify(next);
    });

    this.When("I click Add", function (next) {
        breadcrumbPage.addCard();
        next();
    });
};