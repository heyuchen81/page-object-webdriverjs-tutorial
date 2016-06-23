// https://watirmelon.com/2015/11/04/waiting-in-webdriverjs/

'use strict';

var expect = require('chai').expect;
var loadingPage = require('../page_objects/loading.page.js');

module.exports = function() {
	this.World = require('../support/world.js').World;

	this.When(/^user has accessed the dynamic loading page$/, function(callback) {
		loadingPage.load(this);
		loadingPage.pageTitle(this).then(function(title) {
			expect(title).to.equal('The Internet');
		});
		callback();
	});
	
	this.Then(/^user click the start button$/, function(callback) {
		this.driver.sleep(1000);				
		loadingPage.btnStart(this).click();
		callback();
	});
	
	this.Then(/^user should see hello world text$/, function(callback) {
		this.driver.sleep(1000);					
		
		loadingPage.checkDynamticButton(this).then(function(present) {
			expect(present).to.equal(false);
		});
		loadingPage.loadDynamticButton(this);				
		loadingPage.checkDynamticButton(this).then(function(present) {
			expect(present).to.equal(true);
		});		
		callback();
	});
};