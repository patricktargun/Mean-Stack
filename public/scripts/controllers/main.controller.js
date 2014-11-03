(function() {
	'use strict';

	angular
		.module('app')
		.controller('MainController' , MainController);

	function MainController(MainService){
		var vm = this;

		vm.test = "Test!";
	};

})();