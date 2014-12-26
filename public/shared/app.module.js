(function() {
	'use strict';

	angular
		.module('app', [
			'ngRoute'
		])
		.config(config);

	function config($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: '/partials/main/main.html',
			controller: 'MainCtrl',
			controllerAs: 'main'
		})
		.otherwise({ redirectTo: '/' });
	}

})();