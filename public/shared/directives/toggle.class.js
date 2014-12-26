(function() {
	'use strict';
	angular
	.module('app')
	.directive('toggleClass', function($q){
		return {
			restrict: 'A',
				//Says where you can use the directive in the html
				
    		link : function(scope, elem, attrs) {
      
			    var currentState = true;
			      
			    elem.on('click', function() {
			        console.log('You clicked me!');
			        
			        if(currentState === true) {
			          console.log('It is on!');
			          angular.element(elem).removeClass(attrs.onIcon);
			          angular.element(elem).addClass(attrs.offIcon);
			        } else {
			          console.log('It is off!');
			          angular.element(elem).removeClass(attrs.offIcon);
			          angular.element(elem).addClass(attrs.onIcon);
					}

					currentState = !currentState;
				});
			}
		};
	});  
})();