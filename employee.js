angular.module('emp', [])
	.controller('EmployeeController', function EmployeeController(){
		this.eid = '101';
		this.fname = 'Ryan';
		this.lname = 'Lara';
		this.salary = 10000;
		
		this.getEmp = function getEmp(){
			var message = 'Emp-ID: ' + this.eid + '\n';
				message += 'First-Name: ' + this.fname + '\n';
				message += 'Last-Name: ' + this.lname + '\n';
				message += 'Salary: ' + this.salary + '\n';				
			alert(message);
		};
	});