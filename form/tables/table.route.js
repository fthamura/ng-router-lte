
(function() {
	'use strict';

	angular.module('myApp').config(allRoute);

	function allRoute($stateProvider) {
		$stateProvider.state('tables-simple', {
				url: '/form/tables/simple',
				templateUrl: 'form/tables/simple.html'
		})
			.state('tables-data', {
				url: '/form/tables/data',
				templateUrl: 'form/tables/data.html'	});
	}
})();