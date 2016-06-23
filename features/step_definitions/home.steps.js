'use strict';

var expect = require('chai').expect;
var homePage = require('../page_objects/home.page.js');

module.exports = function() {
	this.World = require('../support/world.js').World;

	this.Given(/^user has access to the home site$/, function(callback) {
		homePage.load(this);
		homePage.pageTitle(this).then(function(title) {
			expect(title).to.equal('The Internet');
		});
		callback();
	});

};