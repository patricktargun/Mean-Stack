(function() {
	'use strict';

	angular
		.module('app')
		.factory('MainService' , MainService);

	function MainService(){

		var service = {
        	getMethod: getMethod,
        	getOtherMethod: getOtherMethod
    	};

    	return service;

    	////////////

	    function getMethod() {
	       // implementation details go here
	    }
	    function getOtherMethod() {
	       // implementation details go here
	    }
	};

})();