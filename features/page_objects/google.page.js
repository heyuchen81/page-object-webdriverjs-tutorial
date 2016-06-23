'use strict';

module.exports = {
			
	/* 
	 *    Web Elements
	 */
	
	pageTitle : function(my) {
		return my.driver.getTitle();
	},
	
	searchBox : function(my) {
		return my.driver.findElement({ name : 'q' });
	},
	
	
    // **********************************************************************

	/*
	 *    Actions
	 */

	load : function(my) {
	    my.driver.get('https://www.google.co.uk/');
	}

};