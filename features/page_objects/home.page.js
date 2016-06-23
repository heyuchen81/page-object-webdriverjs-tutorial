'use strict';

module.exports = {
		
	/* 
	 *    Web Elements
	 */
		
	pageTitle : function(my) {
		return my.driver.getTitle();          
	},
	
	
    // **********************************************************************

	/*
	 *    Actions
	 */

	load : function(my) {
	    my.driver.get('http://the-internet.herokuapp.com/');
	}

};