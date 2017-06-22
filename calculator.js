angular.module('calc', [])
	.controller('CalculatorController', function CalculatorController(){
		this.num1 = 0;
		this.num2 = 0;
		this.add = function add(){
			this.res = this.num1 + this.num2;	
		};
		this.sub = function sub(){
			this.res = this.num1 - this.num2;	
		};
		this.mul = function mul(){
			this.res = this.num1 * this.num2;	
		};
		this.div = function div(){
			this.res = this.num1 / this.num2;	
		};
	});