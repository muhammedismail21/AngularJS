var _module = angular.module('myModule', []);
_module.controller('myController', function myController($scope){
	$scope.products = [
		{name:'barbie doll', price: 10.00},
		{name:'pen', price: '3.00'}
	];
});
_module.controller('orderController', function orderController($scope){
	$scope.orders = [
		{item:'barbie doll', qty:2},
		{item:'pen', qty:6}
	];
});
