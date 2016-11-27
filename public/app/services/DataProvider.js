(function(){
	'use strict';

	angular
		.module('MyApp')
		.factory('DataProvider', DataProvider)

	DataProvider.$inject = ['$http'];	

	function DataProvider($http){
		var dataProvider = {
			get: get
		};

		return dataProvider;

		function get(){
			return $http.get('/getData');
		}
	}
})();