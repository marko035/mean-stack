(function(){
	'use strict';

	angular
		.module('MyApp')
		.controller('MainController', MainController)

	MainController.$inject = ['DataProvider'];	
		
	function MainController(DataProvider){
		var vm = this;
		vm.text = 'Data from controller';
		vm.otherText = '';
		vm.getData = getData;

		function getData(){
			DataProvider.get().then(function(response){
				vm.otherText = response.data;
			});;
		}
	}	
})();