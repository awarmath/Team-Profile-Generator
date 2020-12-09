const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Engineer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employees = [];

function addEmployee() {
    inquirer.prompt([{
        message: "Enter new employee's name",
        name: 'name'
    },
    {
        type: 'list',
        message: "Select the employee's role",
        choices: ['Engineer', 'Intern', 'Manager'],
        name: 'role'
    },
    {
        message: "Enter new employee's ID",
        name: 'id'
    },
    {
        message: "Enter new employee's email address",
        name: 'email'
    }])
    thisExpression(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === 'Engineer') {
            roleInfo = 'GitHub username';
        } else if (role === 'Intern') {
            roleInfo = 'School Name';
        } else {
            roleInfo = 'Office Phone Number';
        }
        inquirer.prompt([{
            message: `Enter employee's ${roleInfo}`,
            name: 'roleInfo'
        },
        {
            type: 'list',
            message: 'Would you like to add more employees',
            choices: ['yes', 'no,'],
            name: 'moreEmployees'
        }])
        .then(function({roleInfo, moreEmployees}) {
            let newEmployee;
            if (role === 'Engineer') {
                newEmployee = new Engineer(name, id, email, roleInfo);
            } else if (role === 'Manager') {
                newEmployee = new Manager(name, id, email, roleInfo);
            } else {
                newEmployee = new Intern(name, id, email, roleInfo);
            }
            employees.push(newEmployee);
            console.log(employees);
            if (moreEmployees === 'yes') {
                addEmployee();
            }
        });
    });
}

addEmployee();