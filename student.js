var _module = angular.module('stud', []);
	_module.controller('StudentController', function StudentController(){
		this.sid = 'S0012344';
		this.fname = 'scott';
		this.lname = 'woodrock';
		this.email = 'scott.woodrock@ng.org';
		this.course = '.Net';
		this.courses = ['.Net', 'AngularJS', 'SQL Server'];
		
		this.register = function register(){
			var message = 'Student-ID: ' + this.sid + '\n';
				message += 'First-Name: ' + this.fname + '\n';
				message += 'Last-Name: ' + this.lname + '\n';
				message += 'Email: ' + this.email + '\n';
				message += 'Course: ' + this.course + '\n';
			alert(message);
		};
	});