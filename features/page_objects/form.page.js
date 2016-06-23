'use strict';

module.exports = {
			
	/* 
	 *    Web Elements
	 */
	
	pageTitle : function(my) {
		return my.driver.getTitle();
	},
	
	username : function(my) {
		return my.driver.findElement({ id : 'username' }); 		
	},
	
	password : function(my) {
		return my.driver.findElement({ id : 'password' }); 		
	},
	
	form : function(my) {
		return my.driver.findElement({ id : 'login' }); 		
	},

	flash : function(my) {
		return my.driver.findElement({ id : 'flash' }); 		
	},
	
	
    // **********************************************************************

	/*
	 *    Actions
	 */

	load : function(my) {
	    my.driver.get('http://the-internet.herokuapp.com/login');
	},
	
	submit : function(my) {
		my.driver.findElement({ id : 'login' }).submit();
	}

};