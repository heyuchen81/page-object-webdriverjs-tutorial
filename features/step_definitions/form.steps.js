'use strict';

var expect = require('chai').expect;
var loginPage = require('../page_objects/form.page.js');

module.exports = function() {
	this.World = require('../support/world.js').World;

	this.When(/^user has accessed the login page$/, function(callback) {
		loginPage.load(this);
		loginPage.pageTitle(this).then(function(title) {
			expect(title).to.equal('The Internet');
		});
		callback();
	});
	
	this.Then(/^login form should deny access with wrong creds$/, function(callback) {
		loginPage.load(this);
		this.driver.sleep(1000);		
		loginPage.username(this).sendKeys('foo');
		loginPage.password(this).sendKeys('bar');		
		loginPage.submit(this);		
		loginPage.flash(this).getText().then(function(txt) {
			expect(txt).to.contain('Your username is invalid!');
		});
		callback();
	});
	
	this.Then(/^login form should allow access with correct creds$/, function(callback) {
		loginPage.load(this);
		this.driver.sleep(1000);		
		loginPage.username(this).sendKeys('tomsmith');
		loginPage.password(this).sendKeys('SuperSecretPassword!');		
		loginPage.submit(this);		
		loginPage.flash(this).getText().then(function(txt) {
			expect(txt).to.contain('You logged into a secure area!');
		});
		callback();
	});
};