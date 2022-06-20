const inquirer = require('inquirer')
const viewAll = require('../db/viewAllQueries')
const getAll = require('../db/getAllQueries')
viewByManager = require('./viewByManager')
viewByDepartments = require('./viewByDepartment')
const {
    removeEmployee,
    removeRole,
    removeDepartment 
    
}= require('./delete')
const { 
    updateEmployeeManager, 
    updateEmployeeRole 
} = require('./updateEmployee')

addEmployee = require('./addEmployee')
addRole = require('./addRole')
addDepartment = require('./addDepartment')


mainMenu = () => {
    getAll.getAllEmployees()
    getAll.getAllRoles();
    getAll.getAllMangers();
    getAll.getAllDepartments();
    inquirer.prompt([
    {
        type: "list",
        name: 'mainmenu',
        message: 'Main Menu',
        choices:[
            'View All Employees', 
            'Add Employee', 
            'Update Employee Role',
            'Update Employee Manager',
            'Delete Employee',
            'View Teams By Manager',
            'View All Roles',
            'Add Role',
            'Delete Role',
            'View All Departments',
            'View Teams By Department',
            'Add Department',
            'Delete Department'
        ]
    }
    ]
    ).then(answers =>{
        mainMenuActions(answers);
})};

mainMenuActions= (answers)=>{
    //View All Options
    if(answers.mainmenu === 'View All Employees'){
        viewAll.viewAllEmployees();
    }else if(answers.mainmenu === 'View All Roles'){
        viewAll.viewAllRoles();
    }else if(answers.mainmenu === 'View All Departments'){
        viewAll.viewAllDepartments();

    //View By Options
    }else if(answers.mainmenu === 'View Teams By Manager'){
        viewByManager();
    }else if(answers.mainmenu === 'View Teams By Department'){
        viewByDepartment();

    //Add Options
    }else if(answers.mainmenu === 'Add Employee'){
        addEmployee();
    }else if(answers.mainmenu === 'Add Role'){
        addRole();
    }else if(answers.mainmenu === 'Add Department'){
        addDepartment();

    //Update Options
    }else if(answers.mainmenu === 'Update Employee Role'){
        updateEmployeeRole();
    }else if(answers.mainmenu === 'Update Employee Manager'){
        updateEmployeeManager();
    
    //Delete Options
    }else if(answers.mainmenu === 'Delete Employee'){
        removeEmployee();
    }else if(answers.mainmenu === 'Delete Role'){
        removeRole();
    }else if(answers.mainmenu === 'Delete Department'){
        removeDepartment();
    }
}



module.exports = mainMenu
