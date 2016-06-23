'use strict';

module.exports = {
			
	/* 
	 *    Web Elements
	 */
	
	pageTitle : function(my) {
		return my.driver.getTitle();
	},
	
	btnStart : function(my) {
		var divStart = my.driver.findElement({ id : 'start' });
		return divStart.findElement({ tagName : 'button' }); 		
	},
	
	loadedPage : function(my) {
		return my.driver.findElement({ id : 'finish' }); 		
	},

	
    // **********************************************************************

	/*
	 *    Actions
	 */

	load : function(my) {
	    my.driver.get('http://the-internet.herokuapp.com/dynamic_loading/2');
	},
	
	loadDynamticButton : function(my) {
		my.driver.wait(my.webdriver.until.elementLocated(my.webdriver.By.id('finish')), 10000, 'Could not locate the child element within the time specified');		
	},
	
	checkDynamticButton : function(my) {
		return my.driver.isElementPresent(my.webdriver.By.id('finish'));
	}
	
};