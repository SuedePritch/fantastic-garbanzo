const inquirer = require('inquirer')
viewAllDepartments = require('../db/viewAllQueries')
viewAllEmployees = require('../db/viewAllQueries')
viewAllRoles = require('../db/viewAllQueries')
addEmployee = require('./addemployee')

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
            'Add Department'
        ]
    }
    ]
    ).then(answers =>{
        mainMenuActions(answers);
})};

mainMenuActions= (answers)=>{
    //View All Options
    if(answers.mainmenu === 'View All Employees'){
        viewAllEmployees();
    }else if(answers.mainmenu === 'View All Roles'){
        viewAllRoles();
    }else if(answers.mainmenu === 'View All Departments'){
        viewAllDepartments();

    //Add Options
    }else if(answers.mainmenu === 'Add Employee'){
        addEmployee();
    }else if(answers.mainmenu === 'Add Role'){
        addRole();
    }else if(answers.mainmenu === 'Add Department'){
        addDepartment();
    }
}


module.exports = mainMenu
