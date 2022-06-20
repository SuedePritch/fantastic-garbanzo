const inquirer = require('inquirer')
const viewAll = require('../db/viewAllQueries')
const getAll = require('../db/getAllQueries')
const db = require('../server')
const {managerChoicesArray, generateChoicesManager} = require('./choiceGenerator')
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
            'View Teams By Manager',
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
        viewAll.viewAllEmployees();
    }else if(answers.mainmenu === 'View All Roles'){
        viewAll.viewAllRoles();
    }else if(answers.mainmenu === 'View All Departments'){
        viewAll.viewAllDepartments();
    }else if(answers.mainmenu === 'View Teams By Manager'){
        viewByManager();

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
    }
}

viewByManager = () =>{
    generateChoicesManager();
    inquirer.prompt([
        {
            type: "list",
            name: 'manager',
            message: 'Choose Manager to View Team',
            choices: managerChoicesArray
        }
        ]).then(answers =>{
            let managerChosen = answers.manager.split(' ')
            let managerIdChosen = managerChosen[0]
            db.execute(`
            SELECT CONCAT(first_name, ' ', last_name) AS Name FROM employee WHERE manager_id = ${managerIdChosen}
            `, function (err, results) {
                if(err){
                    console.log(err);
                }else{
                    console.table(results);    
                }
                mainMenu();
            })
    })
}

module.exports = mainMenu
