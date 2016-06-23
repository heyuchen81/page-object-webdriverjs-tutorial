'use strict';

module.exports = {
			
	/* 
	 *    Web Elements
	 */
	
	pageTitle : function(my) {
		return my.driver.getTitle();
	},
	
	checkbox1 : function(my) {
		var cbs = my.driver.findElement({ id : 'checkboxes' }); 
		return cbs.findElement({ css : 'input:first-Child' }); 		
	},
	
	checkbox2 : function(my) {
		var cbs = my.driver.findElement({ id : 'checkboxes' }); 
		return cbs.findElement({ css : 'input:last-Child' }); 		
	},
	
	
    // **********************************************************************

	/*
	 *    Actions
	 */

	load : function(my) {
	    my.driver.get('http://the-internet.herokuapp.com/checkboxes');
	}

};