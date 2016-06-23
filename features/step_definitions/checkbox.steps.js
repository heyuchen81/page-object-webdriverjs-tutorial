'use strict';

var expect = require('chai').expect;
var checkboxPage = require('../page_objects/checkbox.page.js');

module.exports = function() {
	this.World = require('../support/world.js').World;

	this.When(/^user has accessed the checkbox page$/, function(callback) {
		checkboxPage.load(this);
		checkboxPage.pageTitle(this).then(function(title) {
			expect(title).to.equal('The Internet');
		});
		callback();
	});
	
	this.Then(/^checkbox two should be enabled$/, function(callback) {
		this.driver.sleep(1000);
		checkboxPage.checkbox2(this).isSelected().then(function(ifselected) {
			expect(ifselected).to.equal(true);
		});
		callback();
	});
	
	this.Then(/^checkbox one should be enabled after clicking on it$/, function(callback) {
		checkboxPage.checkbox1(this).isSelected().then(function(ifselected) {
			expect(ifselected).to.equal(false);
		});
		this.driver.sleep(1000);
		checkboxPage.checkbox1(this).click();
		this.driver.sleep(1000);
		checkboxPage.checkbox1(this).isSelected().then(function(ifselected) {
			expect(ifselected).to.equal(true);
		});		
		callback(); // callback(null, 'pending');
	});
};