'use strict';

var expect = require('chai').expect;
var googlePage = require('../page_objects/google.page.js');

module.exports = function() {
	this.World = require('../support/world.js').World;

	this.When(/^user has accessed the google page$/, function(callback) {
		googlePage.load(this);
		googlePage.pageTitle(this).then(function(title) {
			expect(title).to.equal('Google');
		});
		callback();
	});

	
	this.Then(/^user should see a search textbox$/, function(callback) {
		googlePage.searchBox(this).sendKeys('Ingenta');
		callback(); 
	});

};