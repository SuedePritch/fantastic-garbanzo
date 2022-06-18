const inquirer = require('inquirer');
const db = require('./server') 

viewAllEmployees = () =>{
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
    });
}
viewAllRoles = () =>{
    db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
    });
}
viewAllDepartments = () =>{
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
    });
}

mainMenu = () => {
    inquirer.prompt([
    {
        type: "list",
        name: 'mainmenu',
        message: 'Main Menu\n',
        choices:[
            'View All Employees', 
            'Add Employee', 
            'Update Employee',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Departments'
        ]
    }
    ]
    ).then(answers =>{
        if(answers.mainmenu === 'View All Employees'){
            viewAllEmployees();
        }else if(answers.mainmenu === 'View All Roles'){
            viewAllRoles();
        }else if(answers.mainmenu === 'View All Departments'){
            viewAllDepartments();
        }
        return
    })
}
    mainMenu();