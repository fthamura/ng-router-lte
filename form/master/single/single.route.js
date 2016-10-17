
(function() {
	'use strict';

	angular.module('myApp').config(allRoute);

	function allRoute($stateProvider) {
		$stateProvider.state('form-single-new', {
				url: '/form/master/single/new',
				templateUrl: 'form/master/single/new.html'
		})
			.state('form-single-search', {
				url: '/form/master/single/search',
				templateUrl: 'form/master/single/search.html'
	});
	}
})();

